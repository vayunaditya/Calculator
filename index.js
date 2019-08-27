let newVal = "";
let prevVal = "";
let resultVal = "";
let mathOperator = "";
let decimalClicked = false;
let totalVal = [];
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
    totalVal.push(newVal);
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
    totalVal.push(mathOperator);
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
    console.log(totalVal.length)
    for(let i = 0; i < totalVal.length; i++){
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
        let bodmas = ["/", "*", "+", "-"];
            for(let j = 0; j < bodmas.length; j++){

        }
    }

    
prevVal = resultVal;
inputVal.value = resultVal;
};