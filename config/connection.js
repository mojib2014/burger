/*
Make the connection to the database and export to be used by the O.R.M.
*/
var mysql = require('mysql');

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);

} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "burger_db"
  });
};

connection.connect();

module.exports = connection;