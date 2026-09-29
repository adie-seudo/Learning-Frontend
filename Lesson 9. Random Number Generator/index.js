document.getElementById("set").onclick = function () {
  let one = Math.floor(Math.random() * 6) + 1;
  document.getElementById("one").textContent = `${one}`;

  let two = Math.floor(Math.random() * 6) + 1;
  document.getElementById("two").textContent = `${two}`;

  let three = Math.floor(Math.random() * 6) + 1;
  document.getElementById("three").textContent = `${three}`;
};
