import { Response, NextFunction, Request } from "express";
import Quiz from "../models/quiz";
import Report from "../models/report";
import ProjectError from "../helper/error";
interface ReturnResponse {
  status: "success" | "error";
  message: string;
  data: {} | [];
}
const startExam = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const quiz = await Quiz.findById(req.params.quizId, {
      name: 1,
      question_lists: 1,
      is_published: 1,
    });
    if (!quiz) {
      const error = new ProjectError("Quiz not found");
      error.statuscode = 404;
      throw error;
    }
    if (!quiz.is_published) {
      const error = new ProjectError("Quiz is not published");
      error.statuscode = 404;
      throw error;
    }
    const resp: ReturnResponse = {
      status: "success",
      message: "Quiz ",
      data: quiz,
    };
    res.status(201).send(resp);
  } catch (error) {
    next(error);
  }
};

const submitExam = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const quizId = req.body.quizId;
    console.log(quizId);
    const Attempted_question = req.body.Attempted_question;
    const quiz = await Quiz.findById(quizId, { answers: 1 });
    if (!quiz) {
      const error = new ProjectError("Quiz not found");
      error.statuscode = 404;
      throw error;
    }

    const answers = quiz.answers;
    const userId = req.userId;

    const totalQuestions = Object.keys(answers);
    const total = totalQuestions.length;
    let score = 0;
    for (let i = 0; i < total; i++) {
      let question_number = totalQuestions[i];
      if (
        !!Attempted_question[question_number] &&
        answers[question_number] == Attempted_question[question_number]
      ) {
        console.log(score + "in");
        score = score + 1;
      }
    }
    const report = new Report({ userId, quizId, score, total });

    const data = await report.save();
    console.log("done");
    const resp: ReturnResponse = {
      status: "success",
      message: "Quiz submitted",
      data: { total, score, ReportId: data._id },
    };
    res.status(200).send(resp);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export { startExam, submitExam };
