"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.submitExam = exports.startExam = void 0;
var quiz_1 = require("../models/quiz");
var report_1 = require("../models/report");
var error_1 = require("../helper/error");
var startExam = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var quiz, error, error, resp, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, quiz_1["default"].findById(req.params.quizId, {
                        name: 1,
                        question_lists: 1,
                        is_published: 1
                    })];
            case 1:
                quiz = _a.sent();
                if (!quiz) {
                    error = new error_1["default"]("Quiz not found");
                    error.statuscode = 404;
                    throw error;
                }
                if (!quiz.is_published) {
                    error = new error_1["default"]("Quiz is not published");
                    error.statuscode = 404;
                    throw error;
                }
                resp = {
                    status: "success",
                    message: "Quiz ",
                    data: quiz
                };
                res.status(201).send(resp);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                next(error_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.startExam = startExam;
var submitExam = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var quizId, Attempted_question, quiz, error, answers, userId, totalQuestions, total, score, i, question_number, report, data, resp, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                quizId = req.body.quizId;
                console.log(quizId);
                Attempted_question = req.body.Attempted_question;
                return [4 /*yield*/, quiz_1["default"].findById(quizId, { answers: 1 })];
            case 1:
                quiz = _a.sent();
                if (!quiz) {
                    error = new error_1["default"]("Quiz not found");
                    error.statuscode = 404;
                    throw error;
                }
                answers = quiz.answers;
                userId = req.userId;
                totalQuestions = Object.keys(answers);
                total = totalQuestions.length;
                score = 0;
                for (i = 0; i < total; i++) {
                    question_number = totalQuestions[i];
                    if (!!Attempted_question[question_number] &&
                        answers[question_number] == Attempted_question[question_number]) {
                        console.log(score + "in");
                        score = score + 1;
                    }
                }
                report = new report_1["default"]({ userId: userId, quizId: quizId, score: score, total: total });
                return [4 /*yield*/, report.save()];
            case 2:
                data = _a.sent();
                console.log("done");
                resp = {
                    status: "success",
                    message: "Quiz submitted",
                    data: { total: total, score: score, ReportId: data._id }
                };
                res.status(200).send(resp);
                return [3 /*break*/, 4];
            case 3:
                error_3 = _a.sent();
                console.log(error_3);
                next(error_3);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.submitExam = submitExam;
