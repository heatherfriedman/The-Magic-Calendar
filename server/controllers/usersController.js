const db = require('../models/usersModel');

const usersController = {};

usersController.newUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const query = `INSERT INTO users (username, password) VALUES ('${username}', '${password}');`;
    const data = await db.query(query);
    return next();
  } catch {
    return next('ERROR');
  }
};

module.exports = usersController;
