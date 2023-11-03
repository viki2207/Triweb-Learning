const { LOGIN_EVENT, myEventEmitter } = require("./Eventfile");
const dbfile = require("./dbfile");
const { loginsuccessful } = require("./login");

myEventEmitter.on(LOGIN_EVENT, (userName) => {
  console.log("Sending email to user:", userName);
});

loginsuccessful("viki");
