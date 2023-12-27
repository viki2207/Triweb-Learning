"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var schema = mongoose_1["default"].Schema;
//schema
var quizSchema = new mongoose_1.Schema({
    name: {
        type: "string",
        required: true,
        unique: true
    },
    question_lists: [
        {
            question_number: {
                type: "number"
            },
            question: String,
            options: {}
        },
    ],
    answers: {},
    created_by: {
        type: mongoose_1["default"].Types.ObjectId,
        required: true
    },
    is_published: {
        type: Boolean,
        "default": false
    }
}, { timestamps: true });
var Quiz = mongoose_1["default"].model("Quiz", quizSchema);
exports["default"] = Quiz;
