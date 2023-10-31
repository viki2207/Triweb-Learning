//in call pass arguments
//in apply() pass array
function product(pname, price) {
  this.pname = pname;
  this.price = price;
}
function user(uname, pname, price) {
  product.call(this, pname, price);
  this.uname = uname;
}
const user1 = new user("viki", "Laptop", 20000);
function MarkDetails(...marks) {
  this.subject1 = marks[0];
  this.subject2 = marks[1];
  this.subject3 = marks[2];
  this.subject4 = marks[3];
  this.subject5 = marks[4];
  let status = "pass";
  marks.forEach((num) => {
    if (num < 33) {
      status = "fail";
    }
  });
  this.result = status;
}

function student(sname, ...marks) {
  MarkDetails.apply(this, marks);
  this.sname = sname;
}
const student1 = new student("viki", 45, 24, 34, 23, 56);
console.log(student1);
