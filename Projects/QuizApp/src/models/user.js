"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var schema = mongoose_1["default"].Schema;
//schema
var userSchema = new mongoose_1.Schema({
    name: {
        type: "string",
        required: true
    },
    email: {
        type: "string",
        required: true,
        unique: true,
        index: true
    },
    password: {
        type: "string",
        required: true
    }
}, { timestamps: true });
var User = mongoose_1["default"].model("User", userSchema);
exports["default"] = User;
