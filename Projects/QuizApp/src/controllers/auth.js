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
exports.isUserExist = exports.loginUser = exports.registerUser = void 0;
var user_1 = require("../models/user");
var bcryptjs_1 = require("bcryptjs");
var jsonwebtoken_1 = require("jsonwebtoken");
var error_1 = require("../helper/error");
var express_validator_1 = require("express-validator");
var registerUser = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var resp, validationError, err, email, name_1, password, user, result, err, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                validationError = (0, express_validator_1.validationResult)(req);
                if (!validationError.isEmpty()) {
                    err = new error_1["default"]("Validation failed");
                    err.statuscode = 422;
                    err.data = validationError.array();
                    throw err;
                }
                email = req.body.email;
                name_1 = req.body.name;
                return [4 /*yield*/, bcryptjs_1["default"].hash(req.body.password, 12)];
            case 1:
                password = _a.sent();
                user = new user_1["default"]({ email: email, name: name_1, password: password });
                return [4 /*yield*/, user.save()];
            case 2:
                result = _a.sent();
                if (!result) {
                    err = new error_1["default"]("No Result found");
                    err.statuscode = 401;
                    throw err;
                }
                else {
                    resp = {
                        status: "success",
                        message: "Registration done",
                        data: { userid: result._id }
                    };
                    res.send(resp);
                }
                return [3 /*break*/, 4];
            case 3:
                error_2 = _a.sent();
                next(error_2);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.registerUser = registerUser;
var loginUser = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var resp, email, password, user, err, status1, token, err, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                email = req.body.email;
                password = req.body.password;
                return [4 /*yield*/, user_1["default"].findOne({ email: email })];
            case 1:
                user = _a.sent();
                if (!!user) return [3 /*break*/, 2];
                err = new error_1["default"]("No User exist");
                err.statuscode = 401;
                throw err;
            case 2: return [4 /*yield*/, bcryptjs_1["default"].compare(password, user.password)];
            case 3:
                status1 = _a.sent();
                if (status1) {
                    token = jsonwebtoken_1["default"].sign({ userId: user._id }, "secretmyverysecretkey", {
                        expiresIn: "1h"
                    });
                    resp = {
                        status: "success",
                        message: "Login successful",
                        data: { token: token }
                    };
                    res.send(resp);
                }
                else {
                    err = new error_1["default"]("credentials mismatch");
                    err.statuscode = 401;
                    throw err;
                }
                console.log(user);
                _a.label = 4;
            case 4: return [3 /*break*/, 6];
            case 5:
                error_3 = _a.sent();
                next(error_3);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.loginUser = loginUser;
var isUserExist = function (email) { return __awaiter(void 0, void 0, void 0, function () {
    var user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, user_1["default"].findOne({ email: email })];
            case 1:
                user = _a.sent();
                if (!user) {
                    return [2 /*return*/, false];
                }
                return [2 /*return*/, true];
        }
    });
}); };
exports.isUserExist = isUserExist;
