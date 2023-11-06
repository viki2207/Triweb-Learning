//promise.race(iterable)
//return first res or rej promise
function fn1() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Function1");
    }, 2000);
  });
}

function fn3() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Function3");
    }, 500);
  });
}
function fn2() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej("Function2-rej");
    }, 500);
  });
}
const listofPromises = [fn1(), fn2(), fn3()];
Promise.race(listofPromises)
  .then((result) => {
    console.log("Fulfilled promise", result);
  })
  .catch((err) => {
    console.log(err);
  });
