var arr = []

function oneToTen(num) {
  arr.push(num);
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
      alert("Wrong! Start over!");
      arr = []
    }
  }
  if (arr.length == 10) {
    alert("You Win!");
  }
}