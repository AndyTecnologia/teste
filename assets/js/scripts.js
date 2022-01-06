var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function trocaCor() {
  if (currentNumberWrapper < 0) {
    currentNumberWrapper.style.background = "#FFFFFF";
  }
}

function increment() {
  currentNumber = currentNumber + 1;
  currentNumberWrapper.innerHTML = currentNumber;
}
function decrement() {
  currentNumber = currentNumber - 1;
  currentNumberWrapper.innerHTML = currentNumber;
}
