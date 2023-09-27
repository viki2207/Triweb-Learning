import express from "express";
const router = express.Router();
import { startExam, submitExam } from "../controllers/exam";
import { isAuthenticated } from "../middlewares/isAuth";
//get//exam//quuizid
router.get("/:quizId", isAuthenticated, startExam);
//post exam
router.post("/", isAuthenticated, submitExam);
export default router;
