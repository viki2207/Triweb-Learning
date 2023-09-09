const express = require("express");
const usercontroller = require("../controller/user");
const router = express.Router();
router.post("/register", usercontroller.register);
router.post("/get", usercontroller.get);
router.post("/update", usercontroller.update);
router.post("/delete", usercontroller.delete);
module.exports = router;
