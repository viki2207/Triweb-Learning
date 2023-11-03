const User = require("../models/user");

const getuser = async (req, res) => {
  const user = await User.find({}, { userName: 1, _id: 0 });
  res.send(user);
};
const postuser = async (req, res) => {
  const user = new User(req.body);
  const result = await user.save();
  res.send({ result, status: "Sucess" });
};
const putuser = (req, res) => {
  res.send("put user found");
};
module.exports.getuser = getuser;

module.exports.postuser = postuser;
module.exports.putuser = putuser;
