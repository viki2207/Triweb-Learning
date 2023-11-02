let student = {
  sname: "Sikandar",
  friend: "Arush",
  class: "Btech",
  mobile: 1234,
};

console.log(student.sname);
//convert pbject to string
//json.stringify making whole object convert to string
let stringfromobject = JSON.stringify(student);
console.log(stringfromobject);
//when object to convert to string after that we can't remove each value
//object from string
let objectfromString = JSON.parse(stringfromobject);
console.log(objectfromString.sname);
//server  make always using express
