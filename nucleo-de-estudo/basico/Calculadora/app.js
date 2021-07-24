// window.addEventListener("DOMContentLoaded", function () {});

let display = document.getElementById("display");
display.innerText = "0";
let input = document.querySelectorAll(".btn");

let operations = ["+", "-", "*", "/", "%", "="];
let clear = ["C", "CE"];
let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let digits = [];
let currentNumber = 0;
let clickedOperation = [];
let sequence = [];
let result = 0;

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
  display.innerText = digits.join("");
};

digits.forEach((num) => {
  if (parseFloat(num) === Number) {
    for (let index = 0; index < num; ++i) {
      currentNumber += digits[index];
    }
    console.log(digits);
  }
  console.log(digits);
});

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

const handleEqual = (number) => {
  console.log(number);
  clickedOperation.forEach((op) => {
    if (op === "+") {
      for (let index = 0; index < number; ++i) {
        if (number[index] === isNaN) {
          break;
        } else {
          result += parseFloat(number[index]);
        }
      }
    } else if (op === "-") {
      for (let index = 0; index < number; ++i) {
        result -= number[index];
      }
    } else if (op === "*") {
      for (let index = 0; index < number; ++i) {
        result *= number[index];
      }
    } else if (op === "/") {
      for (let index = 0; index < number; ++i) {
        result /= number[index];
      }
    } else if (op === "%") {
      for (let index = 0; index < number; ++i) {
        result %= number[index];
      }
    }
  });
  digits.push(result);
  result = 0;
};
//21 words max
