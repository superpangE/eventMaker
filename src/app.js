const express = require('express');
const path = require('path');
const mysql = require('mysql');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'alsckddl1!',
  database: 'eventMaker',
});

connection.connect();

app.listen(3000);
