//send or recieve db via models
import { Request, Response, NextFunction } from "express";
import User from "../models/user";
import ProjectError from "../helper/error";
interface ReturnResponse {
  status: "success" | "error";
  message: string;
  data: {} | [];
}

const getUser = async (req: Request, res: Response, next: NextFunction) => {
  let resp: ReturnResponse;

  try {
    const userId = req.params.userId;
    console.log(req.userId);
    if (req.userId != req.params.userId) {
      const err = new ProjectError("You are not Authorized");
      err.statuscode = 500;
      err.data = { hi: "Its error " };
      throw err;
    }
    const user = await User.findById(userId, { name: 1, email: 1 });
    if (!user) {
      resp = { status: "error", message: "No User found", data: {} };
      res.send(resp);
    } else {
      resp = {
        status: "success",
        message: "User found",
        data: user,
      };
      res.send(resp);
    }
  } catch (error) {
    next(error);
    // console.log(error);
    // resp = { status: "error", message: "Something went wrong", data: {} };
    // res.status(500).send(resp);
  }
};
const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  let resp: ReturnResponse;
  try {
    if (req.userId != req.body._id) {
      console.log(req.userId);
      console.log(req.body._id);

      const err = new ProjectError("You are not Authorised");
      err.statuscode = 401;
      throw err;
    }
    const userId = req.body._id;
    const user = await User.findById(userId);
    if (!user) {
      const err = new ProjectError("No user exist");
      err.statuscode = 401;
      throw err;
    } else {
      user.name = req.body.name;
      await user.save();
    }
    resp = {
      status: "success",
      message: "User updated",
      data: {},
    };
    res.send(resp);
  } catch (error) {
    next(error);
    // resp = { status: "error", message: "Something went wrong", data: {} };
    // res.status(500).send(resp);
  }
};
export { getUser, updateUser };
