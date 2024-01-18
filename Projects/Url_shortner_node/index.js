const express = require("express");
const { connectToMongoDB } = require("./connect");
const urlRoute = require("./routes/url");
const app = express();
const PORT = 8001;
connectToMongoDB(
  "mongodb+srv://root:root@cluster0.f8bifn6.mongodb.net/short-url"
).then(() => console.log("MongoDB connected"));
app.use(express.json());
app.use("/url", urlRoute);
app.listen(PORT, () => console.log(`server started at PORT: ${PORT}`));
