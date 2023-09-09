
const mysql = require("mysql2");
const pool = mysql.createPool({
  host: "localhost",
  database: "workshop1",
  user: "root",
  password: "",
});
module.exports = pool.promise();
//cpnneect betwenn model and db
//promise taking responsbility of the insertion or not
