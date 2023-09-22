import { Request, Response, NextFunction } from "express";
import User from "../models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
interface ReturnResponse {
  status: "success" | "error";
  message: string;
  data: {};
}
const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let resp: ReturnResponse;
  try {
    const email = req.body.email;
    const name = req.body.name;
    let password = await bcrypt.hash(req.body.password, 12);

    const user = new User({ email, name, password });
    const result = await user.save();
    if (!result) {
      resp = { status: "error", message: "No Result found", data: {} };

      res.send(resp);
    } else {
      resp = {
        status: "success",
        message: "Registration done",
        data: { userid: result._id },
      };

      res.send(resp);
    }
  } catch (error) {
    console.log(error);
    resp = { status: "error", message: "Something went wrong", data: {} };
    res.status(500).send(resp);
  }
};

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  let resp: ReturnResponse;

  try {
    const email = req.body.email;
    const password = req.body.password;

    //find user with email
    const user = await User.findOne({ email });
    if (!user) {
      resp = { status: "error", message: "No User exist", data: {} };
      res.status(401).send(resp);
    } else {
      const status1 = await bcrypt.compare(password, user.password);
      if (status1) {
        const token = jwt.sign({ userId: user._id }, "secretmyverysecretkey", {
          expiresIn: "1h",
        });
        resp = {
          status: "success",
          message: "Login successful",
          data: { token },
        };
        res.send(resp);
      } else {
        resp = { status: "error", message: "credentials mismatch", data: {} };
        res.status(401).send(resp);
      }

      console.log(user);
    }

    //verify password using bcrypt
    //user decide
  } catch (error) {
    console.log(error);
    resp = { status: "error", message: "Something went wrong", data: {} };
    res.status(500).send(resp);
  }
};

export { registerUser, loginUser };
