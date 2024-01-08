import express from "express";
//whenever i get the my request to the console that time i use morgon lib
import morgan from "morgan";
//cors using for the data sharing
import cors from "cors";
import { config } from "dotenv";
import router from "./router/route.js";
/**
 *  import connection file */
import connect from "./database/conn.js";

const app = express();
/**app middleware */
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
config();
/**Application port */
const port = process.env.PORT || 8080;
console.log(port);

/** routes */
app.use("/api", router);
/** routes */
app.get("/", (req, res) => {
  try {
    res.json("Get Request");
    console.log("re");
  } catch (error) {
    res.json(error.message);
  }
});
/** start server only when we have a valid connections */
connect()
  .then(() => {
    try {
      app.listen(port, () => {
        console.log(`Server connected to https://localhost:5005`);
      });
    } catch (error) {
      console.log("Cannont connect to the server ");
    }
  })
  .catch((error) => {
    console.log(error.message);
    console.log("Invalid Database Connection");
  });
