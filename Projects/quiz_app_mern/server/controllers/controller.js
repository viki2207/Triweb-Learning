import Questions from "../models/questionSchema.js";
import result from "../models/resultSchema.js";
import questions, { answers } from "../database/data.js";

/**get all question */
export async function getQuestions(req, res) {
  /**method in a find all in collection and inside and return all */
  try {
    const q = await Questions.find();
    res.json(q);
  } catch (error) {
    res.json({ error });
  }
}
/**Insert all questions */
export async function insertQuestions(req, res) {
  try {
    Questions.insertMany({ questions, answers }, function (err, data) {
      res.json({ msg: "Data saved successfully..." });
    });
  } catch (error) {
    res.json({ error });
  }
}

export async function dropQuestions(req, res) {
  try {
    await Questions.deleteMany();
    res.json({ msg: "Data deleted successfully ...!" });
  } catch (error) {}
}
export async function getResult(req, res) {
  res.json("Result api get request");
}
export async function storeResult(req, res) {
  res.json("Result api post request");
}
export async function dropResult(req, res) {
  res.json("Result api delete request");
}
