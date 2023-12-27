"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var schema = mongoose_1["default"].Schema;
//schema
var reportSchema = new mongoose_1.Schema({
    userId: {
        type: mongoose_1["default"].Types.ObjectId,
        required: true
    },
    quizId: {
        type: mongoose_1["default"].Types.ObjectId,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    }
}, { timestamps: true });
var Report = mongoose_1["default"].model("Report", reportSchema);
exports["default"] = Report;
