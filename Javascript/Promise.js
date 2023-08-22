function Validate(name) {
  return new Promise((resolve, reject) => {
    if (name == "abcd") {
    } else {
      reject("not allowed");
    }
  });
}
Validate("v")
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });
