const mysql = require("mysql");

const db = mysql.createConnection({
  host: process.env.HOST,
  port: process.env.PORTSQL,
  user: process.env.DB_USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

module.exports = db;
