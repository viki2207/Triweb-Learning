function failure(err) {
  console.log("failed", err);
}

function success(result) {
  console.log("success", result);
}
function validate(name, yesSucess, noError) {
  if (name === "abcd") {
    yesSucess("Name is validated");
  } else {
    noError("not matched");
  }
}
validate("abcd", success, Error);
