const db = require('../models/usersModel');

const calendarController = {};

calendarController.newEntry = async (req, res, next) => {
  try {
    console.log(req.body);
    const { type, entry } = req.body;
    const query = `INSERT INTO entries (type, content, userid) VALUES ('${type}', '${entry}', ${2})`;
    const data = await db.query(query);
    return next();
  } catch (error) {
    return next('Error in calendarController.newEntry:', error);
  }
};

calendarController.getEntries = async (req, res, next) => {
  try {
    const query = 'SELECT * FROM entries';
    const data = await db.query(query);

    res.locals.information = data.rows[data.rows.length - 1];
    console.log('res locals', res.locals.information);
    return next();
  } catch (error) {
    return next('Error in calendarController.getEntries:', error);
  }
};

module.exports = calendarController;
