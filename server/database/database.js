const mysql = require('mysql')
require('dotenv').config()

// Connection Pool
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: 33306,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
})
connection.connect(error => {
  if (error) throw error
  console.log('Successfully connected to the database')
})
module.exports = connection
