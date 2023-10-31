function add(callfrom, n1, n2) {
  console.log(callfrom, "", n1 + n2);
}
setImmediate(() => {
  add("setImmediate", 1, 2);
});
setTimeout(() => {
  add("setTimeout", 2, 3);
}, 0);
process.nextTick(() => {
  add("Process nextTick", 4, 5);
});
add("Direct", 3, 4);
/*
-> Its put its callback at the front of the queue
->execute after the code currently being executed before IO events , or Timer 
->async behaviour 
-> always first direct,next tick,set time out and set immediate
 */
