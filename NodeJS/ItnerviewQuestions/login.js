const { myEventEmitter, LOGIN_EVENT } = require("./Eventfile");
module.exports.loginsuccessful = (userName) => {
  setInterval(() => {
    myEventEmitter.emit(LOGIN_EVENT, userName);
  }, 2000);
};
