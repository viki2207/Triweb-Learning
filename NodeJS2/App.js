const express = require("express");
const userRoute = require("./routers/user");
const calculatorRoute = require("./routers/calculator");
console.log("I m running");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("here");
});
// app.get("/add", (req, res) => {
//   let n1 = 3;
//   let n2 = 4;
//   let sum = n1 + n2;
//   res.send(`Sum = ${sum}`);
// });

app.use("/calculator", calculatorRoute);

//localhost:3000/user/..
app.use("/user", userRoute);
app.listen(3050);
