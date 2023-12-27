"use strict";
exports.__esModule = true;
//rederiect request to particular method on controller
var express_1 = require("express");
var auth_1 = require("../controllers/auth");
var express_validator_1 = require("express-validator");
var router = express_1["default"].Router();
router.post("/", [
    (0, express_validator_1.body)("name")
        .trim()
        .not()
        .isEmpty()
        .isLength({ min: 4 })
        .withMessage("Please enter a valid name ,minimum 4 char long"),
    (0, express_validator_1.body)("email")
        .trim()
        .isEmail()
        .custom(function (emailId) {
        return (0, auth_1.isUserExist)(emailId)
            .then(function (status) {
            if (status) {
                return Promise.reject("user already exists");
            }
        })["catch"](function (err) {
            return Promise.reject(err);
        });
    })
        .normalizeEmail(),
    (0, express_validator_1.body)("password")
        .trim()
        .isLength({ min: 8 })
        .withMessage("Enter atlist 8 char long password"),
    (0, express_validator_1.body)("confirm_password")
        .trim()
        .custom(function (value, _a) {
        var req = _a.req;
        if (value != req.body.password) {
            return Promise.reject("password mismatched");
        }
        return true;
        //console.log(req.body);
    }),
], auth_1.registerUser);
//login
router.post("/login", auth_1.loginUser);
exports["default"] = router;
