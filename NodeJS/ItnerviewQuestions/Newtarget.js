function DemonewTarget(x) {
  if (new.target === undefined) {
    console.log("No target");
  } else {
    this.x = x;
    console.log("Creating new target");
  }
  console.log("Inside the function");
}
DemonewTarget();
let x = new DemonewTarget(4);
console.log(x);
