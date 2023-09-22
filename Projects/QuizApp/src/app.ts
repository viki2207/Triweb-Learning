import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/user";
import authRoute from "./routes/auth";
const app = express();
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
// mongoose.connect(connectionstring, (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   app.listen(3052, () => {
//     console.log("server connected");
//   });
// });
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
