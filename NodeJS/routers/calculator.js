const express = require("express");
const calculatorcontroller = require("../controller/calculator");
const router = express.Router();

router.post("/add", calculatorcontroller.add);
router.post("/subtract", calculatorcontroller.subtract);
router.post("/multiply", calculatorcontroller.multiply);
router.post("/divide", calculatorcontroller.divide);

module.exports = router;
