const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'cep_lookup',
  port: 3307,
});

module.exports = connection;
