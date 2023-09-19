import { Request, Response } from "express";
import { addUserToDB, updateUserData } from "../models/user";
const registerUser = (req: Request, res: Response) => {
  //fetch request from req
  //validation
  //normalize
  const userName: string = "v";
  const password: string = "Password";
  const Age: number = 25;
  const result = addUserToDB(userName, password, Age);
  res.send(res);
};
const checkTypesAndInterface = (req: Request, res: Response) => {
  type status = true | false;
  type lockedState = "locked" | "unlocked";
  let sState: lockedState = "locked";
  const myUser = {
    id: 1,
    username: "v",
    password: "string",
    age: 21,
    is_active: false,
    accountStatus: 2,
  };
  const result = updateUserData(myUser);
  res.send(result);
};
export { registerUser, checkTypesAndInterface };
