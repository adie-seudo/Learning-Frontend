const Gcash = document.getElementById("Gcash");
const Maya = document.getElementById("Maya");
const Paypal = document.getElementById("Paypal");

document.getElementById("button").onclick = function () {
  if (Gcash.checked) {
    document.getElementById("firstP").textContent =
      `Your chosen payment option is Gcash`;
    document.getElementById("secondP").textContent =
      `Please proceed to the payment verification`;
  } else if (Maya.checked) {
    document.getElementById("firstP").textContent =
      `Your chosen payment option is Maya`;
    document.getElementById("secondP").textContent =
      `Please proceed to the payment verification`;
  } else if (Paypal.checked) {
    document.getElementById("firstP").textContent =
      `Your chosen payment option is Paypal`;
    document.getElementById("secondP").textContent =
      `Please proceed to the payment verification`;
  } else {
    document.getElementById("firstP").textContent =
      `Your did not chose any payment option`;
    document.getElementById("secondP").textContent =
      `Please choose atleast one method`;
  }
};
