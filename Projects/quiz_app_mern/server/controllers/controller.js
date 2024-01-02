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
