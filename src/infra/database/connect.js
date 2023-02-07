const mysql = require("mysql");

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.PORTSQL,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
});

module.exports = db;
