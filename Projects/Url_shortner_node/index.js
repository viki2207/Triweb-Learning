const express = require("express");
const { connectToMongoDB } = require("./connect");
const { restrictToLoggedinUserOnly, checkAuth } = require("./middlewares/auth");

const path = require("path");
const cookieParser = require("cookie-parser");
const URL = require("./models/url");
const urlRoute = require("./routes/url");
const staticRoute = require("./routes/static");
const userRoute = require("./routes/user");
const app = express();
const PORT = 8001;
connectToMongoDB(
  "mongodb+srv://root:root@cluster0.f8bifn6.mongodb.net/short-url"
).then(() => console.log("MongoDB connected"));
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.json());
app.get("/test", async (req, res) => {
  const allurls = await URL.find({});
  return res.render("home", {
    urls: allurls,
  });
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/url", restrictToLoggedinUserOnly, urlRoute);
app.use("/user", userRoute);
app.use("/", checkAuth, staticRoute);
app.get("/url/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectURL);
});
app.listen(PORT, () => console.log(`server started at PORT: ${PORT}`));
