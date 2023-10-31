//generate the seuence using generator function  and that generator function to implementation using yields
//user for pause and resume the generator function
//generator function alwys use *
function* getNum(index) {
  while (index < 5) {
    yield index;
    index++;
  }
}
let it = getNum(0);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().done);
getNum(0);
