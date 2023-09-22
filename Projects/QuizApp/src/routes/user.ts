//rederiect request to particular method on controller
import express from "express";
import { getUser, updateUser } from "../controllers/user";
import { isAuthenticated } from "../middlewares/isAuth";
const router = express.Router();
// router.post("/", registerUser);

// //login
// router.post("/login", loginUser);
//: they know thats receive value for this variable
router.get("/:userId", isAuthenticated, getUser);

//put
router.put("/", updateUser);
export default router;
