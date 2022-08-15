const mysql = require('mysql2/promise');

const connection2 = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'cep_lookup2',
  port: 3307,
});

module.exports = connection2;