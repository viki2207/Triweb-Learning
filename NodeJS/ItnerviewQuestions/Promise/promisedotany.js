//always check the fulfil promise in there
//didn't checkthe reject one

//It will wait, until one of the prmosis fulfillment
function fun1() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej("Function1");
    }, 1000);
  });
}

function fun2() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Function2");
    }, 2000);
  });
}
function fun3() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Function3");
    }, 1000);
  });
}
Promise.any([fun1(), fun2(), fun3()])
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
