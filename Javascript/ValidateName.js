var username = prompt("Enter username");
var h1Tag = document.querySelector("h1");
function setUsername(username) {
  if (username == null || username.length == 0) {
    alert("Please enter a username");
  } else {
    h1Tag.innerHTML = username;
  }
}
setUsername(username);
