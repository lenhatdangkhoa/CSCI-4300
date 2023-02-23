const amButton = document.getElementById("am");
amButton.addEventListener("click", function () {
  const creatEl = document.getElementById("greeting");
  creatEl.innerHTML = "Good Morning!";
});

const pmButton = document.getElementById("pm");
pmButton.addEventListener("click", function () {
  const creatEl = document.getElementById("greeting");
  creatEl.innerHTML = "Good night!";
});

const redButton = document.getElementById("red");
redButton.addEventListener("click", function () {
  const boxColor = document.getElementById("div_color");
  boxColor.setAttribute("class", "bg_red");
});

const yellowButton = document.getElementById("yellow");
yellowButton.addEventListener("click", function () {
  const boxColor = document.getElementById("div_color");
  boxColor.setAttribute("class", "bg_yellow");
});

const greenButton = document.getElementById("green");
greenButton.addEventListener("click", function () {
  const boxColor = document.getElementById("div_color");
  boxColor.setAttribute("class", "bg_green");
});

const blueButton = document.getElementById("blue");
blueButton.addEventListener("click", function () {
  const boxColor = document.getElementById("div_color");
  boxColor.setAttribute("class", "bg_blue");
});

const userInput = document.querySelector("#usrInput");
const addButton = document.querySelector("#addBtn");
const inputList = document.querySelector("#myUL");

addButton.addEventListener("click", function () {
  const userText = document.querySelector("#usrInput").value;
  document.querySelector("#usrInput").value = "";
});
