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
exports.publishQuiz = exports.deleteQuiz = exports.updateQuiz = exports.getQuiz = exports.createQuiz = void 0;
var express_validator_1 = require("express-validator");
var quiz_1 = require("../models/quiz");
var error_1 = require("../helper/error");
var createQuiz = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var validationError, err, created_by, name_1, question_lists, answers, quiz, result, resp, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                validationError = (0, express_validator_1.validationResult)(req);
                console.log(Object.keys(req.body.answers).length);
                if (!validationError.isEmpty()) {
                    err = new error_1["default"]("Validation failed");
                    err.statuscode = 422;
                    err.data = validationError.array();
                    throw err;
                }
                created_by = req.userId;
                name_1 = req.body.name;
                question_lists = req.body.question_lists;
                answers = req.body.answers;
                quiz = new quiz_1["default"]({ created_by: created_by, name: name_1, question_lists: question_lists, answers: answers });
                return [4 /*yield*/, quiz.save()];
            case 1:
                result = _a.sent();
                resp = {
                    status: "success",
                    message: "Quiz created successfully",
                    data: { quizId: result._id }
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
exports.createQuiz = createQuiz;
var getQuiz = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var quiz_Id, quiz, error, error, resp, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                quiz_Id = req.params.quizId;
                return [4 /*yield*/, quiz_1["default"].findById(quiz_Id, {
                        name: 1,
                        question_lists: 1,
                        answers: 1,
                        created_by: 1
                    })];
            case 1:
                quiz = _a.sent();
                if (!quiz) {
                    error = new error_1["default"]("Quiz not found");
                    error.statuscode = 404;
                    throw error;
                }
                if (req.userId !== quiz.created_by.toString()) {
                    error = new error_1["default"]("You are not authorized");
                    error.statuscode = 403;
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
                error_3 = _a.sent();
                next(error_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getQuiz = getQuiz;
var updateQuiz = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var quiz_Id, quiz, error, error, err, resp, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                quiz_Id = req.body._id;
                return [4 /*yield*/, quiz_1["default"].findById(quiz_Id)];
            case 1:
                quiz = _a.sent();
                if (!!quiz) return [3 /*break*/, 2];
                console.log("Im in" + quiz);
                error = new error_1["default"]("Quiz not found");
                error.statuscode = 404;
                throw error;
            case 2:
                if (req.userId !== quiz.created_by.toString()) {
                    error = new error_1["default"]("You are not authorized");
                    error.statuscode = 403;
                    throw error;
                }
                if (quiz.is_published) {
                    err = new error_1["default"]("You cannot update, published quiz");
                    err.statuscode = 403;
                    throw err;
                }
                quiz.name = req.body.name;
                quiz.question_lists = req.body.question_lists;
                quiz.answers = req.body.answers;
                return [4 /*yield*/, quiz.save()];
            case 3:
                _a.sent();
                resp = {
                    status: "success",
                    message: "Quiz updated successfully",
                    data: quiz
                };
                res.status(200).send(resp);
                _a.label = 4;
            case 4: return [3 /*break*/, 6];
            case 5:
                error_4 = _a.sent();
                next(error_4);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.updateQuiz = updateQuiz;
var deleteQuiz = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var quiz_Id, quiz, error, error, err, resp, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                quiz_Id = req.params.quizId;
                return [4 /*yield*/, quiz_1["default"].findById(quiz_Id)];
            case 1:
                quiz = _a.sent();
                if (!!quiz) return [3 /*break*/, 2];
                error = new error_1["default"]("Quiz not found");
                error.statuscode = 404;
                throw error;
            case 2:
                if (req.userId !== quiz.created_by.toString()) {
                    error = new error_1["default"]("You are not authorized");
                    error.statuscode = 403;
                    throw error;
                }
                if (quiz.is_published) {
                    err = new error_1["default"]("You cannot delete, published quiz");
                    err.statuscode = 403;
                    throw err;
                }
                return [4 /*yield*/, quiz_1["default"].deleteOne({ _id: quiz_Id })];
            case 3:
                _a.sent();
                resp = {
                    status: "success",
                    message: "Quiz deleted successfully",
                    data: {}
                };
                res.status(200).send(resp);
                _a.label = 4;
            case 4: return [3 /*break*/, 6];
            case 5:
                error_5 = _a.sent();
                next(error_5);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.deleteQuiz = deleteQuiz;
var publishQuiz = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var quizId, quiz, error, error, resp, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                quizId = req.body.quizId;
                return [4 /*yield*/, quiz_1["default"].findById(quizId)];
            case 1:
                quiz = _a.sent();
                if (!quiz) {
                    console.log("Im in" + quiz);
                    error = new error_1["default"]("Quiz not found");
                    error.statuscode = 404;
                    throw error;
                }
                if (req.userId !== quiz.created_by.toString()) {
                    error = new error_1["default"]("You are not authorized");
                    error.statuscode = 403;
                    throw error;
                }
                quiz.is_published = true;
                return [4 /*yield*/, quiz.save()];
            case 2:
                _a.sent();
                resp = {
                    status: "success",
                    message: "Quiz published successfully",
                    data: {}
                };
                res.status(200).send(resp);
                return [3 /*break*/, 4];
            case 3:
                error_6 = _a.sent();
                next(error_6);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.publishQuiz = publishQuiz;
