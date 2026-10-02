let num1;
let num2;
let answer;
let operator;

document.getElementById("submit").onclick = function () {
  num1 = document.getElementById("one").value;
  num2 = document.getElementById("two").value;
  operator = document.getElementById("operator").value;

  num1 = Number(num1);
  num2 = Number(num2);

  if (operator == "+") {
    answer = sum(num1, num2);
  } else if (operator == "-") {
    answer = sub(num1, num2);
  } else if (operator == "*") {
    answer = prod(num1, num2);
  } else if (operator == "/") {
    answer = div(num1, num2);
  }
  document.getElementById("result").textContent = `Result: ${answer}`;
};

function sum(num1, num2) {
  return num1 + num2;
}

function sub(num1, num2) {
  return num1 - num2;
}

function prod(num1, num2) {
  return num1 * num2;
}

function div(num1, num2) {
  return (answer = num1 / num2);
}
