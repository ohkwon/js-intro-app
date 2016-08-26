var counter = 0
var marks1 = [] //X
var marks2 = [] //O

function mark(element, position) {
  if (marks1.indexOf(position) === -1 && marks2.indexOf(position) === -1) {
    if (counter % 2 === 0) {
      element.innerHTML = "X";
      marks1.push(position);
    } else {
      element.innerHTML = "O";
      marks2.push(position);
    }
    counter++
  }
  console.log(marks1);
  console.log(marks2);
  if (marks1.indexOf("1") !== -1 && marks1.indexOf("2") !== -1 && marks1.indexOf("3") !== -1) {
    alert("X Wins!");
  } else if (marks1.indexOf("4") !== -1 && marks1.indexOf("5") !== -1 && marks1.indexOf("6") !== -1) {
    alert("X Wins!")
  } else if (marks1.indexOf("7") !== -1 && marks1.indexOf("8") !== -1 && marks1.indexOf("9") !== -1) {
    alert("X Wins!")
  } else if (marks1.indexOf("1") !== -1 && marks1.indexOf("4") !== -1 && marks1.indexOf("7") !== -1) {
    alert("X Wins!")
  } else if (marks1.indexOf("2") !== -1 && marks1.indexOf("5") !== -1 && marks1.indexOf("8") !== -1) {
    alert("X Wins!")
  } else if (marks1.indexOf("3") !== -1 && marks1.indexOf("6") !== -1 && marks1.indexOf("9") !== -1) {
    alert("X Wins!")
  } else if (marks1.indexOf("1") !== -1 && marks1.indexOf("5") !== -1 && marks1.indexOf("9") !== -1) {
    alert("X Wins!")
  } else if (marks1.indexOf("3") !== -1 && marks1.indexOf("5") !== -1 && marks1.indexOf("7") !== -1) {
    alert("X Wins!")
  } else if (marks2.indexOf("1") !== -1 && marks2.indexOf("2") !== -1 && marks2.indexOf("3") !== -1) {
    alert("X Wins!");
  } else if (marks2.indexOf("4") !== -1 && marks2.indexOf("5") !== -1 && marks2.indexOf("6") !== -1) {
    alert("X Wins!")
  } else if (marks2.indexOf("7") !== -1 && marks2.indexOf("8") !== -1 && marks2.indexOf("9") !== -1) {
    alert("X Wins!")
  } else if (marks2.indexOf("1") !== -1 && marks2.indexOf("4") !== -1 && marks2.indexOf("7") !== -1) {
    alert("X Wins!")
  } else if (marks2.indexOf("2") !== -1 && marks2.indexOf("5") !== -1 && marks2.indexOf("8") !== -1) {
    alert("X Wins!")
  } else if (marks2.indexOf("3") !== -1 && marks2.indexOf("6") !== -1 && marks2.indexOf("9") !== -1) {
    alert("X Wins!")
  } else if (marks2.indexOf("1") !== -1 && marks2.indexOf("5") !== -1 && marks2.indexOf("9") !== -1) {
    alert("X Wins!")
  } else if (marks2.indexOf("3") !== -1 && marks2.indexOf("5") !== -1 && marks2.indexOf("7") !== -1) {
    alert("X Wins!")
  }
}