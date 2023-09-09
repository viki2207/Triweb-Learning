module.exports.add = (req, res) => {
  let n1 = req.body.num1;
  let n2 = req.body.num2;
  let sum = n1 + n2;
  res.send(`Sum = ${sum}`);
};
module.exports.subtract = (req, res) => {
  let n1 = req.body.num1;
  let n2 = req.body.num2;
  let diff = n1 - n2;
  res.send(`Differance = ${diff}`);
};
module.exports.multiply = (req, res) => {
  console.log("here");
  let n1 = req.body.num1;
  let n2 = req.body.num2;
  let multi = n1 * n2;
  res.send(`multi = ${multi}`);
};
module.exports.divide = (req, res) => {
  let n1 = req.body.num1;
  let n2 = req.body.num2;
  let Quotinent = n1 / n2;
  res.send(`Quotinent = ${Quotinent}`);
};
