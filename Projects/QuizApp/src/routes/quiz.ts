import express from "express";
import {
  createQuiz,
  getQuiz,
  updateQuiz,
  deleteQuiz,
  publishQuiz,
} from "../controllers/quiz";
import { isAuthenticated } from "../middlewares/isAuth";
const router = express.Router();
import { body } from "express-validator";

//create
//post/quiz
router.post(
  "/",
  isAuthenticated,
  [
    body("name")
      .trim()
      .not()
      .isEmpty()
      .isLength({ min: 10 })
      .withMessage("Please enter a valid name ,minimum 10 char long"),
    body("question_lists").custom((question_lists) => {
      if (question_lists.length == 0 && question_lists.length == undefined) {
        return Promise.reject("Atlist enter one question");
      }
      return true;
    }),
    body("answers").custom((answers) => {
      if (
        Object.keys(answers).length == 0 ||
        Object.keys(answers).length == undefined
      ) {
        console.log("hi");
        return Promise.reject("Atlist enter one option select");
      }
      return true;
    }),
  ],
  createQuiz
);
router.get("/:quizId", isAuthenticated, getQuiz);
router.put("/", isAuthenticated, updateQuiz);
//delete quiz
//delete quiz/quizId
router.delete("/:quizId", isAuthenticated, deleteQuiz);

//published
//patc
router.patch("/publish", isAuthenticated, publishQuiz);
export default router;
