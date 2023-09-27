import express from "express";
import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import userRoute from "./routes/user";
import authRoute from "./routes/auth";
import ProjectError from "./helper/error";
import quizRoute from "./routes/quiz";
import examRoute from "./routes/exam";
import reportRoute from "./routes/report";

const app = express();
interface ReturnResponse {
  status: "Suceess" | "error";
  message: String;
  data: {};
}
app.use(express.json()); // json body for read
app.get("/", (req, res) => {
  res.send("Welcome");
});

const connectionstring = process.env.CONNECTION_STRING || "";
app.use(express.json()); // json body for read
declare global {
  namespace Express {
    interface Request {
      userId: String;
    }
  }
}
app.use("/user", userRoute);
//auth
app.use("/auth", authRoute);
//redirect/quiz
app.use("/quiz", quizRoute);
//redirect/exam
app.use("/exam", examRoute);
//redirect/report
app.use("/report", reportRoute);
// mongoose.connect(connectionstring, (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   app.listen(3052, () => {
//     console.log("server connected");
//   });
// });

app.use((err: ProjectError, req: Request, res: Response, next: Function) => {
  let message: String;
  let statusCode: number;
  let data: any;

  if (!!err.statuscode && err.statuscode < 500) {
    message = err.message;
    statusCode = err.statuscode;
  } else {
    message = "Something went wrong please try again try after sometimes";
    statusCode = 500;
  }
  let resp: ReturnResponse = { status: "error", message, data: {} };
  if (!!err.data) {
    resp.data = err.data;
  }

  //log for user
  console.log(err.statuscode, err.message);
  res.status(statusCode).send(resp);
});
try {
  mongoose.connect(connectionstring);
  console.log("db connected");
} catch (error) {
  console.log("db not connected");
}

app.listen(process.env.PORT, () => {
  console.log("server connected");
});
//whaterver request comes to redirect uer route
