const express = require('express');
const app = express();
const path = require('path');
const usersController = require('./controllers/usersController');

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

app.post('/api/login', usersController.verifyUser, (req, res) => {
  res.send(200);
});

//404 handler
app.use('*', (req, res) => {
  res.status(404).send('Sorry, that page is not here!');
});

//global error handler
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send('Oops! Internal Server Error');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
