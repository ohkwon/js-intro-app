
function daylight(color,element) {
  document.body.style.background = color;
  status(element.innerHTML);
  // console.log(element.innerHTML)
}

function status(day) {
  document.getElementById("day").innerHTML = day;
}