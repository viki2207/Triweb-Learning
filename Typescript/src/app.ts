import express from "express";
import userRoute from "./routes/user";
import { Request, Response } from "express";

const app = express();

app.use("/user", userRoute);

app.listen(process.env.PORT);

//entery point: main file : app.js => wahtever request comes pass onn router
//routers: router transfer to perfect controller

//controllers: model provides the datta
//models interact with data based
//orchestration: bal logic or or extra calculation task any heavy task
//utils: put db files
