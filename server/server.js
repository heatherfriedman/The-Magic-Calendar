const express = require('express');
const app = express();
const path = require('path');
const usersController = require('./controllers/usersController');
const calendarController = require('./controllers/calendarController');

const PORT = 3000;

app.use(express.json());

// if (process.env.NODE_ENV === 'production') {
app.use('/build', express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});
//}

app.post('/api/signup', usersController.newUser, (req, res) => {
  res.send(200);
});

app.post('/api/login', usersController.verifyUser);

app.post(
  '/api/new',
  calendarController.newEntry,

  // (req, res) => {
  //   res.json(res.locals.information);
  // },
);

app.get('/api/new', calendarController.getEntries, (req, res) => {
  res.status(200).json(res.locals.information);
});

app.post('/api/delete', calendarController.deleteEntry);

//do I need this?
app.use((req, res) => {
  //res.status(404).send('Sorry, that page is not here!');
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

//global error handler
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send('Oops! Internal Server Error');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
