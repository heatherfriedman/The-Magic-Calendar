const db = require('../models/usersModel');
const { useHistory } = require('react-router');

const usersController = {};

usersController.newUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const query = `INSERT INTO users (username, password) VALUES ('${username}', '${password}');`;
    const data = await db.query(query);
    return next();
  } catch (error) {
    return next('Error in usersController.newUser:', error);
  }
};

usersController.verifyUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const query = `SELECT username, password FROM users WHERE username='${username}' AND password = '${password}'`;
    const data = await db.query(query);
    if (data.rows.length === 0) {
      res.send(401);
    }
    return next();
  } catch (error) {
    return next('Error in usersController.verifyUser:', error);
  }
};

module.exports = usersController;
