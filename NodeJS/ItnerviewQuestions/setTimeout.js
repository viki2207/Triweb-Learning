function add(callby, n1, n2) {
  console.log(callby, ":", n1 + n2);
}

setImmediate(() => {
  add("SetImmediate", 2, 3);
}); //check queue for nexr cycle
setTimeout(() => {
  add("SetImmediate", 3, 4);
}, 0); //call back register with the timer
add("Direct", 1, 2);
//set time out its working fast because they ave specific time in that reason set immdediate little bit slow
