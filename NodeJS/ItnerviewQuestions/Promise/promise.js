function f1() {
  return "function1";
}
function f2() {
  return new Promise((res, rej) => {
    rej("Promise rejected");
    setTimeout(() => {
      console.log("now call");
      res("Function2");
    }, 1000);
  });
}
function f3() {
  return "function3";
}
function startcalling() {
  const res1 = f1();
  console.log(res1);
  f2()
    .then((result) => {
      console.log(result);
      const res3 = f3();
      console.log(res3);
    })
    .catch((error) => {
      console.log(error);
    });
}
startcalling();
