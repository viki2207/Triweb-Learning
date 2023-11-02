//map
let user = {
  uname: "abc",
  mobile: 9898,
};
let key1 = {};
let key2 = { uname: "viki" };
let weakMapExample = {
  [key1]: "some data",
  [key2]: "new data",
};
console.log(weakMapExample);

//weak map there is a not trustable
//in this function there is not sure when key gone
//in this function not directly available keys
//in this function not support length function
//in this function not support any property
//weakmap accept only objects as keys
//map accepts premitive datatype as keys
//there is no size property in this function
