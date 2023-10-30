//set immideate is not immideate as at name
//call back place in the the check queue of the next cycle of the event loop
//check queue , occurs later in the timmer queue
let a = 1;
let b = 2;
function addTwoNumbers(a, b) {
  console.log(a + b);
}
//always register in first loop but execute in a second loop because immediate don't wait for to finish the just execute other functions
setImmediate(() => {
  addTwoNumbers(1, 2);
});

console.log("inside event loop1");
