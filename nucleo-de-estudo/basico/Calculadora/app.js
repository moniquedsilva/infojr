// window.addEventListener("DOMContentLoaded", function () {});

let display = document.getElementById("display");
display.innerText = "0";
let input = document.querySelectorAll(".btn");

let operations = ["+", "-", "*", "/", "%", "="];
let clear = ["C", "CE"];
let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let digits = [];
let result = [];

input.forEach((e) => {
  e.addEventListener("click", (event) => {
    let clickedButton = event.target.innerText;
    clear.includes(clickedButton) ? handleClear(clickedButton) : "";
    numbers.includes(clickedButton) ? handleNumbers(clickedButton) : "";
    operations.includes(clickedButton) ? handleOperation(clickedButton) : "";
  });
});

const handleClear = (value) => {
  if (value === "C") {
    digits = [];
    return (display.innerText = "0");
  } else {
    digits.pop();
    return (display.innerText = digits.join(""));
  }
};
const handleNumbers = (value) => {
  digits.push(value);
  display.innerText = digits.join("");
};
const handleOperation = (value) => {
  digits.push(value);
  display.innerText = digits.join("");
};

//21 words max
