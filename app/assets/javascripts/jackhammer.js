var counter = 0
var colors = ["red", "orange", "yellow", "green", "purple"]


function jackhammer(element) {
  counter++;
  if (counter === 5) {
    alert("You win!");
  }
  element.style.background = colors[counter-1];
}