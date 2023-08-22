function validateUser(name) {
  return new Promise((resolve, reject) => {
    if (name == "abcd") {
      resolve("yes validate user");
    } else {
      reject("Invalide user");
    }
  });
}
validateUser("abcd")
  .then((status) => {
    console.log("Event loop after around 1");
    console.log(status);
  })
  .catch((err) => {
    console.log(err);
  });
console.log("Event loop around1");  
