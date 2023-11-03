const { getuser, postuser, putuser } = require("../controller/user");
const express = require("express");
const router = express.Router();
router.get("/", getuser);
router.put("/", putuser);
router.post("/", postuser);

module.exports = router;
