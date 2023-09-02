//mapobjkey
const st1 = { sname: "viki" };
const st2 = { sname: "rey" };
const stMap = new Map();
stMap.set("Key1", 12);
//console.log(stMap.get("Key1"));
stMap.set(st1, "He is average Student");
stMap.set(st2, "He is good Student");
console.log(stMap);

//set object duplicate elements not allowed in set object
//in object as well in list
let newSet = new Set();
newSet.add(1);
newSet.add(2);
console.log(newSet);
//classes
class st {
  constructor(sname, sage) {
    this.sname = sname;
    this.sage = sage;
  }
}
// const s3 = new s3("v", 6);
// const s2 = new s2("r", 7);
// console.log(s2);
// console.log(s3);
//promises

function updateAge(age) {
  return new Promise((resolve, reject) => {
    if (age > 0) {
      age = age + 1;
      resolve(age);
    } else {
      // reject("Invalide age");
      throw new Error("Invalide age");
    }
  });
}

updateAge(-7)
  .then((updateAge) => {
    console.log("updateAge is", updateAge);
  })
  .catch((err) => {
    console.log("Age not updated");
  });
//symbol we don't need to change put in symbol, we can't change easily , if we careate two symbol than both value different
const person = {
  id: "1234",
  pname: "xyz",
};
const xyz = Symbol("xyz"); // access only xyz symbol
person[xyz] = "Hidden Data";
// console.log(person);
// person.id = 2;
// console.log(person);
// console.log(Object.getOwnPropertyNames(person));
console.log(person[xyz]);
//global symbol
const ywz = Symbol.for("ywz");
person[ywz] = "not hidden";
console.log(person[ywz]);
//global symbol you can copy anywhere else and use anywhere..
//.include method  word is availabelin that string or not for that check we used a include method , as well case sensitive
let str = "This is a good place";

console.log(str.includes("lace"));
//start with check for start

console.log(str.startsWith("This"));
console.log(str.endsWith("place"));
//array.from
let str1 = "hiiMe";
let arrk = Array.from(str1);
console.log(arrk);
//ARRAY.KEY
let arr = ["a", "b", "c", "d", "e", "f"];
let keys = arr.keys();
console.log(keys);
for (let e of keys) {
  console.log(arr[e]);
}
//array.find(
//array.findIndex()
let arr2 = [12, 13, 14, 15];
let firstoddNumber = arr2.find(getodd);
function getodd(value, index, arr) {
  return value % 2 != 0;
}
console.log(firstoddNumber);

let arr3 = [12, 13, 14, 15];
let indexoffirstOdd = arr3.findIndex((value, index, arr) => {
  return value % 2 != 0;
});
console.log(indexoffirstOdd);

//math methods
//Math.trunc() =>always return int
console.log(Math.trunc(3.4));
console.log(Math.trunc(2));
console.log(Math.sign(-19));
console.log(Math.sign(20));
console.log(Math.sign(0));
console.log(Math.cbrt(20));
console.log(Math.log2(2));
console.log(Math.log10(10));
//epsilon
let x = Number.EPSILON;
console.log(x);
//min_safe_int
let y = Number.MAX_SAFE_INTEGER;
console.log(y);
//max_safe_int

let z = Number.MIN_SAFE_INTEGER;
console.log(z);
//number methods
let a = 2;
let b = 12234345454565656;
console.log(Number.isInteger(a));
console.log(Number.isSafeInteger(b));

console.log(isFinite(20000 / 0));
console.log("isNAN", isNAN(2 / "e"));
