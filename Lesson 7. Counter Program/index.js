let count = 0;

document.getElementById("minus").onclick = function () {
  count--;
  document.getElementById("number").textContent = `${count}`;
};
document.getElementById("reset").onclick = function () {
  count = 0;
  document.getElementById("number").textContent = `${count}`;
};
document.getElementById("add").onclick = function () {
  count++;
  document.getElementById("number").textContent = `${count}`;
};
