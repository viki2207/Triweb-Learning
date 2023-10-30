function Product(productName, Price) {
  this.productName = productName;
  this.product = Price;
}
function student(sname, productName, Price) {
  //   this.sname = sname;
  //   this.productName = productName;
  //   this.Price = Price;
  Product.call(this, sname, productName, Price);
  this.sname = sname;
  this.productName = productName;
  this.Price = Price;
}

const student1 = new student("kivi", "Laptop", 2000);
const p1 = new Product("Laptop", 1000);
const p2 = new Product("Mouset", 10);
console.log(p1);
console.log(p2);
console.log(student1);
console.log(
  student1.sname,
  " Purchased a",
  student1.productName,
  "for Rs",
  student1.Price
);
