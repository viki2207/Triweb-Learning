const express = require("express");
const userRoute = require("./routes/user");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
//middleware
app.use((req, res, next) => {
  console.log("I m here");
  next(); //whenever they want to direct they send there
});
//user->user router xyz/user/1
app.use("/user", userRoute);
mongoose
  .connect("mongodb://localhost:27017/myroute")
  .then(app.listen(3001))
  .catch((err) => console.log(err.message));
