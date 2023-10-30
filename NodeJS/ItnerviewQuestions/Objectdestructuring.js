const marksofStudent = [40, 60, 70, 78, 17, 34, 34, 34, 34];
//object destructuring is used for destructure data from data structure that is come from one object and divided into different parts in  a variable from array and from object
//remove data put in variables called distructuring
// subject1marks = marksofStudent[0];
// subject2marks = marksofStudent[1];
// subject3marks = marksofStudent[2];
// subject4marks = marksofStudent[3];
// subject5marks = marksofStudent[4];
[
  student1marks,
  student2marks,
  student3marks,
  student4marks,
  student5marks,
  ...othermarks
] = marksofStudent;
console.log(
  student1marks +
    "Subject1 marks: " +
    student2marks +
    "Subject2 marks: " +
    student3marks +
    "Subject3 marks: " +
    student4marks +
    "Subject4 marks:  " +
    student5marks +
    "othermarks: " +
    othermarks
);

//object
const student = {
  uname: "viki",
  mobile: 1234,
  Address: "Australia",
};

const { uname } = student;
console.log(uname);
