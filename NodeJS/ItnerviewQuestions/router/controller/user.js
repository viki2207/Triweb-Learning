const getuser = (req, res) => {
  res.send("get user found");
};
const postuser = (req, res) => {
  res.send("post user found");
};
const putuser = (req, res) => {
  res.send("put user found");
};
module.exports.getuser = getuser;

module.exports.postuser = postuser;
module.exports.putuser = putuser;
