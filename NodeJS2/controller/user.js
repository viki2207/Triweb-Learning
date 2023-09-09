const userModel = require("../models/user");
//register
//async await means the cursor waiting for the complete of insertion and come back of that position
module.exports.register = async (req, res) => {
  try {
    let result = await userModel.create(req.body);
    res.send({ status: "success", data: { id: result.dataValues.id } });
  } catch (error) {
    res.send({ status: "error", message: "user registeration failed" });
  }
};
//get
module.exports.get = async (req, res) => {
  try {
    let data = await userModel.findByPk(req.body.id);
    res.send({ status: "success", data: { data: data } });
  } catch (error) {
    res.send({ status: "error", message: "user not found" });
  }
};

//update
module.exports.update = async (req, res) => {
  try {
    let user = await userModel.findByPk(req.body.id);
    user.password = req.body.password;
    await user.save();
    res.send({ status: "success", message: "user updated" });
  } catch (error) {
    res.send({ status: "error", message: "user not updated" });
  }
};

//delete
module.exports.delete = async (req, res) => {
  try {
    let user = await userModel.findByPk(req.body.id);
    await user.destroy();

    res.send({ status: "success", message: "user deleted" });
  } catch (error) {
    res.send({ status: "error", message: "user not deleted" });
  }
};
