let myImage = document.querySelector("img");
myImage.onclick = function () {
  let imgsrc = myImage.getAttribute("src");
  if (imgsrc == "git.png") {
    myImage.setAttribute("src", "js.png");
  } else {
    myImage.setAttribute("src", "git.png");
  }
};
