const mysql = require('mysql');

const dbConnection = mysql.createPool({
  connectionLimit: 1000000,
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

module.exports = { dbConnection };
