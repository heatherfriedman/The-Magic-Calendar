const { Pool } = require('pg');

const PG_URI =
  'postgres://hwngyzxs:1yJvP_2MpN_NT_-yZ1DJDfrX4w8YkFo4@isilo.db.elephantsql.com:5432/hwngyzxs';

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query: ', text);
    return pool.query(text, params, callback);
  },
};
