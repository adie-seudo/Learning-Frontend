/* function openFridge(...foods) {
  console.log(...foods);
}

function getFood(...foods) {
  return foods;
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "sushi";

//openFridge(food1, food2, food3, food4);

const foods = getFood(food1, food2, food3, food4, food5);
console.log(...foods); */

/* function sum(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
}

function getAverage(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result / numbers.length;
}

const total = sum(50, 50, 50, 50);
const average = getAverage(50, 50, 50, 50);

console.log(total);
console.log(average) */

function combineString(...strings) {
  return strings.join(" ");
}

const fullName = combineString("Mr.", "Spongebob", "Squarepants", "111");
console.log(fullName);
