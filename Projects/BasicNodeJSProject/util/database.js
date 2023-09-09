const Sequelize = require("sequelize");
const sequelize = new Sequelize("workshop1", "root", "", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
//cpnneect betwenn model and db
//promise taking responsbility of the insertion or not
