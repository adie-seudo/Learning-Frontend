/* let age = 30;

if (age == 21){
  console.log("Hell yeah");
}
else{
  console.log("Oh hell nah");
} */

/* let student = false;

if (student == true){
  console.log("You are a student");
}
else{
  console.log("You are not a student");
} */

/* let age = 21;
let license = true;

//Nested if-statement

if(age >= 18){
  if (license == true){
    console.log("You are allowed to drive");
  }
  else{
    console.log("Your are not allowed to drive");
  }
}
else{
  console.log("You are not allowed to drive");
} */

/* let age = 100;

if (age >= 18 && age <= 21) {
  console.log("old enough");
} else if (age < 0) {
  console.log("Your age can't be below zero");
} else if (age >= 100) {
  console.log("You're too old");
} else {
  console.log("Not old enough");
} */

let age;

document.getElementById("submit").onclick = function () {
  age = document.getElementById("age").value;
  if (age >= 100) {
    document.getElementById("result").textContent =
      `You are too old to enter this site`;
  } else if (age >= 18) {
    document.getElementById("result").textContent =
      `You are allowed to enter this site`;
  } else if (age == 0) {
    document.getElementById("result").textContent = `You are just born`;
  } else if (age < 0) {
    document.getElementById("result").textContent =
      `You're age can't be negative`;
  } else {
    document.getElementById("result").textContent =
      `You are not allowed to enter this site`;
  }
};
