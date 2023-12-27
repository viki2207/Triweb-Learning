"use strict";
exports.__esModule = true;
var express_1 = require("express");
var mongoose_1 = require("mongoose");
var user_1 = require("./routes/user");
var auth_1 = require("./routes/auth");
var quiz_1 = require("./routes/quiz");
var exam_1 = require("./routes/exam");
var report_1 = require("./routes/report");
var app = (0, express_1["default"])();
app.use(express_1["default"].json()); // json body for read
app.get("/", function (req, res) {
    res.send("Welcome");
});
var connectionstring = process.env.CONNECTION_STRING || "";
app.use(express_1["default"].json()); // json body for read
app.use("/user", user_1["default"]);
//auth
app.use("/auth", auth_1["default"]);
//redirect/quiz
app.use("/quiz", quiz_1["default"]);
//redirect/exam
app.use("/exam", exam_1["default"]);
//redirect/report
app.use("/report", report_1["default"]);
// mongoose.connect(connectionstring, (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   app.listen(3052, () => {
//     console.log("server connected");
//   });
// });
app.use(function (err, req, res, next) {
    var message;
    var statusCode;
    var data;
    if (!!err.statuscode && err.statuscode < 500) {
        message = err.message;
        statusCode = err.statuscode;
    }
    else {
        message = "Something went wrong please try again try after sometimes";
        statusCode = 500;
    }
    var resp = { status: "error", message: message, data: {} };
    if (!!err.data) {
        resp.data = err.data;
    }
    //log for user
    console.log(err.statuscode, err.message);
    res.status(statusCode).send(resp);
});
try {
    mongoose_1["default"].connect(connectionstring);
    console.log("db connected");
}
catch (error) {
    console.log("db not connected");
}
app.listen(process.env.PORT, function () {
    console.log("server connected");
});
//whaterver request comes to redirect uer route
