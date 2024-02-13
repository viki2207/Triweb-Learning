const mongoose = require("mongoose");
//create schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    age: {
      type: Number,
    },
  },
  { timestamps: true }
);
//model basically internact with the database
const User = mongoose.model("User", userSchema);
//model name, schema name
module.exports = User;
