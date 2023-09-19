const addUserToDB = (username: string, password: string, age: number) => {
  console.log(username, password, age);
  return "USer Registration Done!!";
};
type lockedState = "locked" | "unlocked"; // union type
interface User {
  id: Number;
  username: String;
  age: Number;
  password: String;
  is_active: true | false; // union type
  accountStatus: String | number;
}
const updateUserData = (objuser: User): String => {
  //function return type
  console.log(objuser.username);
  return "update Done!!";
};

export { addUserToDB, updateUserData };
