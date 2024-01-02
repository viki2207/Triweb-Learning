import express from "express";
//whenever i get the my request to the console that time i use morgon lib
import morgan from "morgan";
//cors using for the data sharing
import cors from "cors";
import { config } from "dotenv";
const app = express();
/**app middleware */
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
config();
/**Application port */
const port = process.env.PORT || 8080;
/** routes */
app.get("/", (req, res) => {
  try {
    res.json("Get Request");
  } catch (error) {
    res.json(error.message);
  }
});
app.listen(port, () => {
  console.log(`Server connected to http://localhost:${port}`);
});
