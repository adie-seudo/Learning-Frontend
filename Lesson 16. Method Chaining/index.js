/* NO METHOD CHAINING

let username = window.prompt("Enter your username:");
username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();
username = username.slice(1);
username = username.toLowerCase();
username = username.trim();

console.log(`${letter}${username}`); */

//WITH METHOD CHAINING

let username = window.prompt("Enter your username:");

username =
  username.trim().charAt(0).toUpperCase() +
  username.trim().slice(1).toLowerCase();

console.log(username);
