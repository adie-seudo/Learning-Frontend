//username = window.prompt("What's your username?");
//console.log(`Hello ${username}`);

document.getElementById("myB").onclick = function () {
  let mytext = document.getElementById("myText").value;
  document.getElementById("myH1").textContent = `This is your text: ${mytext}`;
};
