//interface
//can not be instantiated
//class: can use to create new objectx
//public , private, protected
//object type
let num: { x: number; y: number } = { x: 1, y: 4 };
console.log(num); //
//optional properties
let num1: { x: number; y?: number } = { x: 1 };

//interface its a another way to name an object type
//interface is a combination of object if u couldn't write with so many object use interace with same type of data
interface Point {
  x: number;
  y: number;
}
let p1: Point = { x: 100, y: 100 };
let P1_new: Point;

//alias type
type MyPoint = {
  x: number;
  y: number;
};
let p2: MyPoint = { x: 100, y: 100 };
//you can redeclare interface but not type alias
//alias type doesn't change
//you can redeclare interface but not type alias
//interface changed
//declare another time as well
// interface Point {
//   x: number;
//   y: number;
//   z: number;
// }
//doesn't declare another time
// type MyPoint = {
//     x: number;
//     y:number;
// }
//union type
let id: number | string = 2;
let x: string[] | string = ["@", "e"];
//maptyped type
type OnlyBoolsAndHorses = {
  [key: string]: boolean | "Horse";
}; // in thype u already fixed value what u want to applied
//for class
//old verrsion
//class point{
// x: number;
// y:number;
//}
//const pt = new Point();
//pt.x = 1;
//pt.y = 2;
//console.log(pt);
//updated version
//class point{
// x: number = 0;
// y:number = 0;
//}
////const pt = new Point();
//pt.x = 1;
//pt.y = 2;
