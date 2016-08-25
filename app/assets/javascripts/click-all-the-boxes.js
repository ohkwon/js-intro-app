var arr = []

function clickAll(num) {
  if (arr.indexOf(num) === -1) {
    arr.push(num);
  }
  if (arr.length == 3) {
    alert("You Win!");
  }
}