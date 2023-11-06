//Promise.allsettle(iterable)
//this function provides you with reject and response methods both together
function fun1() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Function1");
    }, 2000);
  });
}
function fun2() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej("Function2");
    }, 1000);
  });
}
function fun3() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Function3");
    }, 1000);
  });
}
Promise.allSettled([fun1(), fun2(), fun3()]).then((results) => {
  console.log(results);
});
