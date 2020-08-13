const db = require('../models/usersModel');

const calendarController = {};

calendarController.newEntry = async (req, res, next) => {
  try {
    //console.log('req params from calendarController.newEntry', req.params);
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

    const type = [];
    const entry = [];
    data.rows.forEach((object) => {
      type.push(object.type);
      entry.push(object.content);
    });
    res.locals.information = { type, entry };
    // console.log('res locals', res.locals.information);

    return next();
  } catch (error) {
    return next('Error in calendarController.getEntries:', error);
  }
};

calendarController.deleteEntry = async (req, res, next) => {
  try {
    const query = 'SELECT * FROM entries';
    const data = await db.query(query);
    console.log('from delete entry', data);
    console.log('req body from calendar contrller', req.body);
    return next();
  } catch (error) {
    return next('Error in calendarController.deleteEntry:', error);
  }
};

module.exports = calendarController;
