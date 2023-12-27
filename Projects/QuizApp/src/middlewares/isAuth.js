"use strict";
exports.__esModule = true;
exports.isAuthenticated = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
var error_1 = require("../helper/error");
var isAuthenticated = function (req, res, next) {
    //jwt using sign secretmyverysecretkey
    try {
        var authHeader = req.get("Authorization");
        if (!authHeader) {
            var err = new error_1["default"]("Not authenticated");
            err.statuscode = 401;
            throw err;
            res.status(401).send("Not Authenticated");
        }
        else {
            var token = authHeader.split(" ")[1];
            var decodeToken = void 0;
            try {
                decodeToken = jsonwebtoken_1["default"].verify(token, "secretmyverysecretkey");
                console.log(decodeToken);
                if (!decodeToken) {
                    var err = new error_1["default"]("Not authenticated");
                    err.statuscode = 401;
                    throw err;
                }
                else {
                    req.userId = decodeToken.userId;
                }
            }
            catch (error) {
                var err = new error_1["default"]("Not authenticated");
                err.statuscode = 401;
                throw err;
            }
        }
        next();
    }
    catch (error) {
        next(error);
    }
};
exports.isAuthenticated = isAuthenticated;
