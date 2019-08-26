let newVal = "";
let prevVal = "";
let resultVal = "";
let mathOperator = "";
let decimalClicked = false;

let inputVal  = document.getElementById("entry");

function numBtn (num){
    if(resultVal.length){
        newVal = num;
        resultVal = "";
    }else{
        if(num === "."){
            if(decimalClicked !== true){
                newVal = newVal + num;
                decimalClicked = true;  
            }
            
        }
        else{
            newVal = newVal + num;
        }
    }
    inputVal.value = newVal;
};

function mathBtn(operator){
    if(!resultVal){
        prevVal = newVal;
    }else{

        prevVal = resultVal;
    }
    newVal = "";
    decimalClicked = false;
    mathOperator = operator;
    resultVal = "";
    inputVal.value = mathOperator;
}

function clearBtn (){
newVal = "";
prevVal = "";
resultVal = "";
mathOperator = "";
decimalClicked = false;
inputVal.value = 0;
}

function equalBtn(){
    
    newVal = Number(newVal);
    prevVal = Number(prevVal);

    if(mathOperator === "+"){
        resultVal = prevVal + newVal
}else if(mathOperator === "-"){
    resultVal = prevVal - newVal
}else if(mathOperator === "*"){
    resultVal = prevVal * newVal
}else if(mathOperator === "/"){
    resultVal = prevVal / newVal
}
prevVal = resultVal;
inputVal.value = resultVal;
};