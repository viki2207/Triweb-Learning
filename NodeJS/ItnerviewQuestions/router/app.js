const express = require("express");
const userRoute = require("./routes/user");
const app = express();
//middleware
app.use((req, res, next) => {
  console.log("I m here");
  next(); //whenever they want to direct they send there
});
//user->user router xyz/user/1
app.use("/user", userRoute);
app.listen(3000);
