"use strict";
exports.__esModule = true;
var express_1 = require("express");
var quiz_1 = require("../controllers/quiz");
var isAuth_1 = require("../middlewares/isAuth");
var router = express_1["default"].Router();
var express_validator_1 = require("express-validator");
//create
//post/quiz
router.post("/", isAuth_1.isAuthenticated, [
    (0, express_validator_1.body)("name")
        .trim()
        .not()
        .isEmpty()
        .isLength({ min: 10 })
        .withMessage("Please enter a valid name ,minimum 10 char long"),
    (0, express_validator_1.body)("question_lists").custom(function (question_lists) {
        if (question_lists.length == 0 && question_lists.length == undefined) {
            return Promise.reject("Atlist enter one question");
        }
        return true;
    }),
    (0, express_validator_1.body)("answers").custom(function (answers) {
        if (Object.keys(answers).length == 0 ||
            Object.keys(answers).length == undefined) {
            console.log("hi");
            return Promise.reject("Atlist enter one option select");
        }
        return true;
    }),
], quiz_1.createQuiz);
router.get("/:quizId", isAuth_1.isAuthenticated, quiz_1.getQuiz);
router.put("/", isAuth_1.isAuthenticated, quiz_1.updateQuiz);
//delete quiz
//delete quiz/quizId
router["delete"]("/:quizId", isAuth_1.isAuthenticated, quiz_1.deleteQuiz);
//published
//patc
router.patch("/publish", isAuth_1.isAuthenticated, quiz_1.publishQuiz);
exports["default"] = router;
