const db = require('../models/usersModel');

const usersController = {};

usersController.newUser = function (req, res, next) {
  const query = `INSERT INTO users (username, password) VALUES ('test', '1');`;
  db.query(query).then((data) => {
    console.log(data);
  });
};

module.exports = usersController;
