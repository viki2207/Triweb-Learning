const express = require("express");

const mongoose = require("mongoose");
const User = require("../models/userModel");
const router = express.Router();
//create a user
router.post("/", async (req, res, next) => {
  const { name, email, age } = req.body; //from db
  try {
    const userAdded = await User.create({ name: name, email: email, age: age });
    res.status(201).json(userAdded);
  } catch (error) {
    console.log("error: ", error);
    res.send(400).json({ error: error.message });
  }

  //in here first name is coming from frontend and second name coming from backend
});
//get user
router.get("/", async (req, res, next) => {
  try {
    const showAll = await User.find();
    res.status(200).json(showAll);
  } catch (error) {
    console.log("error: ", error);
    res.send(400).json({ error: error.message });
  }
  res.send("Api running");
});

//get single user
router.get("/:id", async (req, res, next) => {
  const { id } = req.params; //from url
  try {
    const singleUser = await User.findById({ _id: id });
    res.status(200).json(singleUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});
//delete
router.delete("/:id", async (req, res, next) => {
  const { id } = req.params; //from url
  try {
    const singleUser = await User.findByIdAndDelete({ _id: id });
    //id : request.params id
    //_id: its a db id
    res.status(200).json(singleUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});
//put // patch
router.patch("/:id", async (req, res, next) => {
  const { id } = req.params; //from url
  const { name, email, age } = req.body;
  try {
    const updateUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    //id : request.params id
    //_id: its a db id
    res.status(200).json(updateUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});
module.exports = router;
