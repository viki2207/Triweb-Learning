//change the "this " from some object
//but call later
//the simplest use of bind is to a make a function that, no matter how it called, is called with a particular this
//in call and apply() we bind"this" function at a time, while in bind() we bind "this" and execute later
let student2 = {
  sname: "jackson",
  mobile: 34343,
};
let student = {
  sname: "Akki",
  mobile: 8989,
  getname: function () {
    console.log(this.sname);
  },
};
let sn = student.getname.bind(student);
//bind function we can use everywhere this bind
setTimeout(sn, 1000);
let st2 = student.getname.bind(student2);
setTimeout(st2, 1000);
//we can use multiple object with a same function using this  whenever u bind and call the another function with a this keyword that will as well access another object student and return as well
//bind basically bind today use later
