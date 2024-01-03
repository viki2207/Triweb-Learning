/**get all question */
export async function getQuestions(req, res) {
  res.json("questions api get request");
}
/**Insert all questions */
export async function insertQuestions(req, res) {
  res.json("questions api post request");
}

export async function dropQuestions(req, res) {
  res.json("questions api drop request");
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
