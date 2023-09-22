//rederiect request to particular method on controller
import express from "express";
import { registerUser, loginUser } from "../controllers/auth";
const router = express.Router();
router.post("/", registerUser);

//login
router.post("/login", loginUser);
export default router;
