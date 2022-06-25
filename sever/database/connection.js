const mysql = require("mysql");
require("dotenv").config();
const connectDB = () => {
  return new Promise((resolve, reject) => {
    const con = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    });
    con.connect((err) => {
      if (err) {
        reject(err);
      }
      resolve(con);
      console.log("da ket noi thanh cong");
    });
  });
};
module.exports = connectDB;
module.exports.closeB = (con) => {
  con.destroy();
};
