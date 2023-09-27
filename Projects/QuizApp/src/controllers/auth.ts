import { Request, Response, NextFunction } from "express";
import User from "../models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import ProjectError from "../helper/error";
import { validationResult } from "express-validator";
interface ReturnResponse {
  status: "success" | "error";
  message: string;
  data: {} | [];
}
const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let resp: ReturnResponse;
  try {
    const validationError = validationResult(req);
    if (!validationError.isEmpty()) {
      const err = new ProjectError("Validation failed");
      err.statuscode = 422;
      err.data = validationError.array();
      throw err;
    }
    const email = req.body.email;
    const name = req.body.name;
    let password = await bcrypt.hash(req.body.password, 12);

    const user = new User({ email, name, password });
    const result = await user.save();
    if (!result) {
      const err = new ProjectError("No Result found");
      err.statuscode = 401;
      throw err;
    } else {
      resp = {
        status: "success",
        message: "Registration done",
        data: { userid: result._id },
      };

      res.send(resp);
    }
  } catch (error) {
    next(error);
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
      const err = new ProjectError("No User exist");
      err.statuscode = 401;
      throw err;
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
        const err = new ProjectError("credentials mismatch");
        err.statuscode = 401;
        throw err;
      }

      console.log(user);
    }

    //verify password using bcrypt
    //user decide
  } catch (error) {
    next(error);
  }
};
const isUserExist = async (email: String) => {
  const user = await User.findOne({ email });
  if (!user) {
    return false;
  }
  return true;
};

export { registerUser, loginUser, isUserExist };
