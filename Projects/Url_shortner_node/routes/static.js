const express = require("express");
const router = express.Router();
router.get("/", async (req, res) => {
  const allurls = await url.find();
  return res.render("home", {
    urls: allurls,
  });
});
module.exports = router;
