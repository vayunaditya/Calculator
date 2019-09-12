let newVal = "";
let prevVal = "";
let resultVal = "";
let mathOperator = "";
let decimalClicked = false;
let totalVal = [];
let inputVal = document.getElementById("entry");
let display = document.getElementById("display");

function numBtn(num) {
  if (resultVal.length) {
    newVal = num;
    resultVal = "";
  } else {
    if (num === ".") {
      if (decimalClicked !== true) {
        newVal = newVal + num;
        decimalClicked = true;
      }
    } else {
      newVal = newVal + num;
    }
  }
  inputVal.value = newVal;
  totalVal.push(newVal);
  displayAA();
}

function mathBtn(operator) {
  if (!resultVal) {
    prevVal = newVal;
  } else {
    prevVal = resultVal;
  }
  newVal = "";
  decimalClicked = false;
  mathOperator = operator;
  resultVal = "";
  inputVal.value = mathOperator;
  totalVal.push(mathOperator);
  displayAA();
}

function clearBtn() {
  newVal = "";
  prevVal = "";
  resultVal = "";
  mathOperator = "";
  decimalClicked = false;
  inputVal.value = 0;
  totalVal = [];
  displayAA();
}

function cal(prev, oper, next) {
  let resultVal;
  prev = Number(prev);
  next = Number(next);
  if (oper === "/") {
    resultVal = prev / next;
  } else if (oper === "*") {
    resultVal = prev * next;
  } else if (oper === "+") {
    resultVal = prev + next;
  } else if (oper === "-") {
    resultVal = prev - next;
  }
  return resultVal;
}

function bodmasCal(bodmas, totalVal) {
  let remainingVal = [];
  for (let i = 0; i < totalVal.length; i++) {
    if (totalVal[i] === bodmas) {
      let result = cal(
        remainingVal[remainingVal.length - 1],
        totalVal[i],
        totalVal[i + 1]
      );
      //console.log("before splice", remainingVal.length, i, result);
      remainingVal.splice(remainingVal.length - 1, 1, result.toString());
      i++;
      //console.log("after splice", remainingVal.length, i);
    } else {
      remainingVal.push(totalVal[i]);
    }
    //console.log(remainingVal, i, totalVal, "aaa");
  }
  return remainingVal;
}

function displayAA() {
  console.log(totalVal);
  display.innerHTML = totalVal.join(" ");
}

function equalBtn() {
  //debugger;
  //let totalVal = [
  //"2",
  //   "+",
  //   "6",
  //   "/",
  //   "3",
  //   "+",
  //   "6",
  //   "/",
  //   "2",
  //   "-",
  //   "2",
  //   "*",
  //   "2"
  // ];
  //3
  //let totalVal = ["2", "+", "2", "+", "3"];

  totalVal = bodmasCal("/", totalVal);
  //console.log("/", totalVal);
  totalVal = bodmasCal("*", totalVal);
  //console.log("*", totalVal);
  totalVal = bodmasCal("+", totalVal);
  //console.log("+", totalVal);
  totalVal = bodmasCal("-", totalVal);
  //console.log("-", totalVal);
  console.log(totalVal);
  inputVal.value = totalVal;
  displayAA();
}
