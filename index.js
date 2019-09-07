let newVal = "";
let prevVal = "";
let resultVal = "";
let mathOperator = "";
let decimalClicked = false;
let totalVal = [];
let inputVal = document.getElementById("entry");

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
}

function clearBtn() {
  newVal = "";
  prevVal = "";
  resultVal = "";
  mathOperator = "";
  decimalClicked = false;
  inputVal.value = 0;
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

function equalBtn() {
  //debugger;
  let totalVal = ["2", "+", "6", "/", "3", "+", "6", "/", "2"];
  let bodmasArray = ["/", "+"];
  for (let j = 0; j < bodmasArray.length; j++) {
    let bodmas = bodmasArray[j];
    let remainingVal = [];
    for (let i = 0; i < totalVal.length; i++) {
      if (totalVal[i] === bodmas) {
        let result = cal(totalVal[i - 1], totalVal[i], totalVal[i + 1]);
        console.log("before splice", remainingVal.length, i);
        remainingVal.splice(remainingVal.length - 1, 1, result.toString());
        i++;
        console.log("after splice", remainingVal.length, i);
      } else {
        remainingVal.push(totalVal[i]);
      }
    }

    console.log(remainingVal);
  }
}
