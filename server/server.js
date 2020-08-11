const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;

app.use(express.json());

// if (process.env.NODE_ENV === 'production') {
app.use('/build', express.static(path.join(__dirname, '../build')));

app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});
//}

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
