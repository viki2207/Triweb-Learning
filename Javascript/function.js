function Employee() {
  this.department = "None";
  this.mobile = "";
}
function Manager(name) {
  Employee.call(this);
  this.name = name;
}

Manager.prototype = object.create(Employee.prototype);
Manager.prototype.constructor = Manager;
let akarsh = new Manager("Akarsh");
console.log(akarsh);

akarsh.email = "abc@gmail.com";
console.log(akarsh.email);

console.log(akarsh.__proto__);
