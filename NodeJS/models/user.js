const db = require("../util/database");
module.exports.insert = async (userData) => {
  console.log(userData);
  let query =
    "INSERT INTO `users`(`name`, `email`, `password`, `remark`) VALUES (?,?,?,?)";
  let id = 0;
  try {
    let result = await db.execute(query, [
      userData.name,
      userData.email,
      userData.password,
      userData.remark,
    ]);
    id = result[0].insertId;

    //execute
    //return
    console.log(result);
  } catch (error) {
    console.log(error);
  }

  return id;
};

module.exports.get = async (userData) => {
  let retData = "";
  try {
    let query = "SELECT * from `users` WHERE id = ?";
    let result = await db.execute(query, [userData.id]);
    retData = result[0][0];
  } catch (error) {
    console.log(error);
  }
  return retData;
};

module.exports.update = async (userData) => {
  try {
    let query = "UPDATE `users` SET `password` = ? where id = ?";
    let result = await db.execute(query, [userData.password, userData.id]);
    return true;
  } catch (error) {
    return false;
  }
};
//? ITS PLACEHOLDER
module.exports.delete = async (userData) => {
  try {
    let query = "DELETE FROM `users` WHERE id = ?";
    let result = await db.execute(query, [userData.id]);
    console.log(result);
    return true;
  } catch (error) {
    return false;
  }
};
