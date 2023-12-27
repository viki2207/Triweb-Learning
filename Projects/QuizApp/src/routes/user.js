"use strict";

exports.__esModule = true;
//rederiect request to particular method on controller
var express_1 = require("express");

var user_1 = require("../controllers/user");
var isAuth_1 = require("../middlewares/isAuth");
var router = express_1.Router();
// router.post("/", registerUser);
// //login
// router.post("/login", loginUser);
//: they know thats receive value for this variable
router.get("/:userId", isAuth_1.isAuthenticated, user_1.getUser);
//put
router.put("/", isAuth_1.isAuthenticated, user_1.updateUser);
exports["default"] = router;
