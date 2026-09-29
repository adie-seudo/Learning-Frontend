/* let username;

do {
  username = window.prompt("Enter your username: ");
} while (username === "" || username === null);

console.log(`Your username is ${username}`); */

let loggedIn = false;
let username;
let password;

while (!loggedIn) {
  username = window.prompt("Enter your username: ");
  password = window.prompt("Enter your password:");

  if (username === "adrian" && password === "password") {
    loggedIn = true;
    console.log("You're logged in");
  } else {
    console.log("Invalid credentials");
  }
}
