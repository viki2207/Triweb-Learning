import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import questions, { answers } from "../database/data.js";
import mongoose from "mongoose";
//const QuestionSchemaname = Questions.modelName;
//const Questions1 = mongoose.model("Questions1", QuestionSchemaname);
/**get all question */
export async function getQuestions(req, res) {
  /**method in a find all in collection and inside and return all */
  try {
    const q = await Questions.find();
    res.json(q);
  } catch (error) {
    console.error(error);
    res.json({ error });
  }
}
/**Insert all questions */
export async function insertQuestions(req, res) {
  //console.log(QuestionSchemaname);
  // console.log("here");
  await Questions.insertMany({ questions: questions, answers: answers })
    .then(function (err, data) {
      res.json({ msg: "Data Saved Successfully...!" });
    })
    .catch(function (error) {
      console.log(error);
      res.json({ error });
    });
}

export async function dropQuestions(req, res) {
  try {
    await Questions.deleteMany();
    res.json({ msg: "Data deleted successfully ...!" });
  } catch (error) {}
}
export async function getResult(req, res) {
  try {
    const { username } = req.body;
    console.log(username);
    const r = await Results.find();
    res.json(r);
  } catch (error) {}
}

export async function storeResult(req, res) {
  try {
    const { username, result, attempts, points, achived } = req.body;
    if (!username && !result) throw new Error("data not provided");
    Results.create({ username, result, attempts, points, achived })
      .then(function (err, data) {
        res.json({ msg: "Result saved successfully" });
      })
      .catch(function (error) {
        res.json({ error: error.message });
      });
  } catch (err) {
    console.log(err);
  }
}
export async function dropResult(req, res) {
  try {
    await Results.deleteMany();
    res.json({ msg: "Data deleted successfully deleted successfully" });
  } catch (error) {
    res.json({ error });
  }
}
