// window.addEventListener("DOMContentLoaded", function () {});

let display = document.getElementById("display");
display.innerText = "0";
let input = document.querySelectorAll(".btn");

let operations = ["+", "-", "*", "/", "%", "="];
let clear = ["C", "CE"];
let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let digits = [];
let currentNumber = "";
let clickedOperation = [];
let sequence = [];
let result = "";

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
    sequence = [];
    return (display.innerText = "0");
  } else {
    if (digits[0] === [] || display.innerText === "0") {
      return (display.innerText = "0");
    } else {
      digits.pop();
    }
  }
  return (display.innerText = digits.join(""));
};

const handleNumbers = (value) => {
  digits.push(value);
  currentNumber = digits.join("");
  display.innerText = digits.join("");
};

const handleOperation = (value) => {
  clickedOperation.push(value);
  sequence.push(currentNumber);
  currentNumber = 0;
  if (value === "=") {
    handleEqual(sequence);
    digits = [];
  } else {
    digits.push(value);
    display.innerText = digits.join("");
  }
};

const handleEqual = (number) => {};
//21 words max
