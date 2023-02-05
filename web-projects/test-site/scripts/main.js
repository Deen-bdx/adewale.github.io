const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/images/africamap4.svg") {
    myImage.setAttribute("src", "images/images/africamap4.svg");
  } else {
    myImage.setAttribute("src", "images/images/africamap4.svg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Love words around Africa, ${myName}`;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Love words around Africa, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};



