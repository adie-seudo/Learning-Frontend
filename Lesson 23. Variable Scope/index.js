let x = 1; //Global: Not Priority

function1();
function2();

function function1() {
  let x = 2; //Local Priority Inside
  console.log(x);
}

function function2() {
  let x = 3; //Local Priority Inside
  console.log(x);
}
