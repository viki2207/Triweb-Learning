"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var exam_1 = require("../controllers/exam");
var isAuth_1 = require("../middlewares/isAuth");
//get//exam//quuizid
router.get("/:quizId", isAuth_1.isAuthenticated, exam_1.startExam);
//post exam
router.post("/", isAuth_1.isAuthenticated, exam_1.submitExam);
exports["default"] = router;
