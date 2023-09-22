import mongoose, { Schema } from "mongoose";
const schema = mongoose.Schema;

//schema
const userSchema = new Schema(
  {
    name: {
      type: "string",
      required: true,
    },
    email: {
      type: "string",
      required: true,
      unique: true,
      index: true,
    },

    password: {
      type: "string",
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
