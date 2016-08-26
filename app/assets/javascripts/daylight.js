
function daylight(index) {
  var dayColors = ["yellow", "orange", "black"];
  document.getElementById("body").style.background = dayColors[index];
  if (index == 0) {
    document.getElementById("day").innerHTML = "Morning"
  } else if (index == 1) {
    document.getElementById("day").innerHTML = "Afternoon"
  } else if (index == 2) {
    document.getElementById("day").innerHTML = "Evening"
  }
}