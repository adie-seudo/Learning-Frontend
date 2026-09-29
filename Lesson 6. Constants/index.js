const pi = 3.14159;
let circumference;
let radius;

document.getElementById("myButton").onclick = function () {
  radius = document.getElementById("myText").value;
  circumference = radius * pi * 2;
  document.getElementById("myH1").textContent =
    `Circumference: ${circumference}`;
};
