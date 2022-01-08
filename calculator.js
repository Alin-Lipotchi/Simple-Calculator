// Variables

const primary = document.querySelector(".primary");
const secondary = document.querySelector(".secondary");
const buttons = document.querySelectorAll("button");
let primaryArr = [];
let secondaryArr = [];
let newArr = [];
let currentNumber = 0;
let currentOperator = 0;
let finalResult = 0;
let hasValue = false;
let isCleared = true;

// Functions

function clear() {
    secondary.innerHTML = "";
    secondaryArr = [];
    primary.innerHTML = "";
    primaryArr = [];
    currentNumber = 0;
    finalResult = 0;
    currentOperator = 0;
    hasValue = false;
    isCleared = true;
}

clear(); // Clear result on refresh

function addNumber(e) {
    if(isCleared) {
        primaryArr.push(e.target.value);
        finalResult = parseFloat(primaryArr.join(""));
        primary.innerHTML = finalResult;
    } else {
        primaryArr.push(e.target.value);
        currentNumber = parseFloat(primaryArr.join(""));
        primary.innerHTML = currentNumber;
    }
    hasValue = true;
}

function addOperator(e) {
    if(isCleared) {
        if(e.target.value === "+") {
            currentOperator = 1;
        }
        if(e.target.value === "-") {
            currentOperator = 2;
        }
        if(e.target.value === "x") {
            currentOperator = 3;
        }
        if(e.target.value === "/") {
            currentOperator = 4;
        }
        if(e.target.value === "pow") {
            primary.innerHTML = finalResult * finalResult;
        }
        if(e.target.value === "sqrt") {
            primary.innerHTML = Math.sqrt(finalResult);
        }
        if(e.target.value === "=") {
            currentOperator = 0;
            primary.innerHTML = finalResult;
        }
        isCleared = false;
    } else {
        if(currentOperator === 1) {
            finalResult += currentNumber;
        }
        if(currentOperator === 2) {
            finalResult -= currentNumber;
        }
        if(currentOperator === 3) {
            finalResult *= currentNumber;
        }
        if(currentOperator === 4) {
            finalResult /= currentNumber;
        }

        if(e.target.value === "+") {
            currentOperator = 1;
        }
        if(e.target.value === "-") {
            currentOperator = 2;
        }
        if(e.target.value === "x") {
            currentOperator = 3;
        }
        if(e.target.value === "/") {
            currentOperator = 4;
        }
        if(e.target.value === "pow") {
            primary.innerHTML = finalResult * finalResult;
        }
        if(e.target.value === "sqrt") {
            primary.innerHTML = Math.sqrt(finalResult);
        }
        if(e.target.value === "=") {
            currentOperator = 0;
        }
        
        if(currentOperator === 0) {
            currentOperator = 0;
            primary.innerHTML = finalResult;
        }
    }
    primaryArr = [];
    console.log(finalResult);
}

// Event Listeners

buttons[0].addEventListener("click", clear);

buttons.forEach(function(btn) {
    if(btn.dataset.type === "number") {
        btn.addEventListener("click", addNumber);
    } 

    if(btn.dataset.type === "operator"){
        btn.addEventListener("click", addOperator);
    }    
});