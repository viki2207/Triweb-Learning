const express = require("express");
const cors = require("cors");

const app = express();

const mongoose = require("mongoose");

const product = require("./model/product");

app.use(cors());
app.use(express.json()); ///to parse the data in req.

app.get("/", (req, res) => {
  res.send("working");
});

app.post("/product", async (req, res) => {
  try {
    const result = await product.create(req.body);
    // console.log(result);
    // res.send(result);
    res.send({ status: "success" });
  } catch (error) {
    console.log(error.message);
    res.send({ status: "error", message: error.message });
  }
});

app.get("/product", async (req, res) => {
  console.log("fetching");
  try {
    const products = await product.find({});
    // console.log(result);
    // res.send(result);
    res.send({ status: "success", data: products });
  } catch (error) {
    console.log(error.message);
    res.send({ status: "error", message: error.message });
  }
});

// Use async/await to connect to the database
(async () => {
  try {
    await mongoose.connect(process.env.connectionString);
    console.log("Connected to MongoDB");

    // Your app setup and listen logic goes here
    app.listen(3004);
  } catch (error) {
    console.error("Error connecting to MongoDB");
    console.error(error);
  }
})();
