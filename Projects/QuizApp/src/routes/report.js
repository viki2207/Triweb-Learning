"use strict";
exports.__esModule = true;
var express_1 = require("express");
var isAuth_1 = require("../middlewares/isAuth");
var report_1 = require("../controllers/report");
var router = express_1["default"].Router();
router.get("/:reportId?", isAuth_1.isAuthenticated, report_1.getReport);
exports["default"] = router;
