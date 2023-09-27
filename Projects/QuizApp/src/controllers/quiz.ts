import { RequestHandler } from "express";
import { validationResult } from "express-validator";
import Quiz from "../models/quiz";
import ProjectError from "../helper/error";
import { ReturnResponse } from "../util/interface";

const createQuiz: RequestHandler = async (req, res, next) => {
  try {
    const validationError = validationResult(req);
    console.log(Object.keys(req.body.answers).length);

    if (!validationError.isEmpty()) {
      const err = new ProjectError("Validation failed");
      err.statuscode = 422;
      err.data = validationError.array();
      throw err;
    }
    const created_by = req.userId;
    const name = req.body.name;
    const question_lists = req.body.question_lists;
    const answers = req.body.answers;

    const quiz = new Quiz({ created_by, name, question_lists, answers });
    const result = await quiz.save();
    const resp: ReturnResponse = {
      status: "success",
      message: "Quiz created successfully",
      data: { quizId: result._id },
    };
    res.status(201).send(resp);
  } catch (error) {
    next(error);
  }
};
const getQuiz: RequestHandler = async (req, res, next) => {
  try {
    const quiz_Id = req.params.quizId;

    const quiz = await Quiz.findById(quiz_Id, {
      name: 1,
      question_lists: 1,
      answers: 1,
      created_by: 1,
    });
    if (!quiz) {
      const error = new ProjectError("Quiz not found");
      error.statuscode = 404;
      throw error;
    }

    if (req.userId !== quiz.created_by.toString()) {
      const error = new ProjectError("You are not authorized");
      error.statuscode = 403;
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
const updateQuiz: RequestHandler = async (req, res, next) => {
  try {
    const quiz_Id = req.body._id;
    const quiz = await Quiz.findById(quiz_Id);
    if (!quiz) {
      console.log("Im in" + quiz);
      const error = new ProjectError("Quiz not found");
      error.statuscode = 404;
      throw error;
    } else {
      if (req.userId !== quiz.created_by.toString()) {
        const error = new ProjectError("You are not authorized");
        error.statuscode = 403;
        throw error;
      }
      if (quiz.is_published) {
        const err = new ProjectError("You cannot update, published quiz");
        err.statuscode = 403;
        throw err;
      }
      quiz.name = req.body.name;
      quiz.question_lists = req.body.question_lists;
      quiz.answers = req.body.answers;
      await quiz.save();
      const resp: ReturnResponse = {
        status: "success",
        message: "Quiz updated successfully",
        data: quiz,
      };
      res.status(200).send(resp);
    }
  } catch (error) {
    next(error);
  }
};
const deleteQuiz: RequestHandler = async (req, res, next) => {
  try {
    const quiz_Id = req.params.quizId;
    const quiz = await Quiz.findById(quiz_Id);
    if (!quiz) {
      const error = new ProjectError("Quiz not found");
      error.statuscode = 404;
      throw error;
    } else {
      if (req.userId !== quiz.created_by.toString()) {
        const error = new ProjectError("You are not authorized");
        error.statuscode = 403;
        throw error;
      }
      if (quiz.is_published) {
        const err = new ProjectError("You cannot delete, published quiz");
        err.statuscode = 403;
        throw err;
      }
      await Quiz.deleteOne({ _id: quiz_Id });
      const resp: ReturnResponse = {
        status: "success",
        message: "Quiz deleted successfully",
        data: {},
      };
      res.status(200).send(resp);
    }
  } catch (error) {
    next(error);
  }
};
const publishQuiz: RequestHandler = async (req, res, next) => {
  try {
    const quizId = req.body.quizId;
    const quiz = await Quiz.findById(quizId);
    if (!quiz) {
      console.log("Im in" + quiz);
      const error = new ProjectError("Quiz not found");
      error.statuscode = 404;
      throw error;
    }
    if (req.userId !== quiz.created_by.toString()) {
      const error = new ProjectError("You are not authorized");
      error.statuscode = 403;
      throw error;
    }
    quiz.is_published = true;
    await quiz.save();
    const resp: ReturnResponse = {
      status: "success",
      message: "Quiz published successfully",
      data: {},
    };
    res.status(200).send(resp);
  } catch (error) {
    next(error);
  }
};
export { createQuiz, getQuiz, updateQuiz, deleteQuiz, publishQuiz };
