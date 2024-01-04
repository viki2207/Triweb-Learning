import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import questions, { answers } from "../database/data.js";

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
  try {
    const r = await Results.find();
    res.json(r);
  } catch (error) {}
}
export async function storeResult(req, res) {
  try {
    const { username, result, Attempts, points, achived } = req.body;
    if (!username && !result) throw Error("data not provided");
    Results.create(
      { username, result, Attempts, points, achived },
      function (err, data) {
        res.json({ msg: "Result saved successfully" });
      }
    );
  } catch (error) {}
}
export async function dropResult(req, res) {
  try {
    await Results.deleteMany();
    res.json({ msg: "Data deleted successfully deleted successfully" });
  } catch (error) {
    res.json({ error });
  }
}
