// Variables
const primary = document.querySelector(".primary");
const secondary = document.querySelector(".secondary");
const buttons = document.querySelectorAll("button");
let primaryArr = [];
let secondaryArr = [];
let newArr = [];
let finalResult = 0;

// Functions
function updatePrimary() {
    primary.innerHTML = primaryArr.join("");
}

function updateSecondary() {
    secondary.innerHTML = secondaryArr.join("");
}

function clear() {
    secondary.innerHTML = "";
    secondaryArr = [];
    primary.innerHTML = "";
    primaryArr = [];
    finalResult = 0
}

clear(); // Clear result on refresh

function equal() {
    primary.innerHTML = finalResult;
}

function addNumber(e) {
    primaryArr.push(e.target.value);
    updatePrimary();
}

function addOperator(e) {
    if(e.target.value === "+") {
        finalResult += parseFloat(primaryArr.join(""));
    } else if(e.target.value === "-") {
        finalResult -= parseFloat(primaryArr.join(""));
    } else if(e.target.value === "x") {
        finalResult *= parseFloat(primaryArr.join(""));
    } else if(e.target.value === "/") {
        finalResult /= parseFloat(primaryArr.join(""));
    } else if(e.target.value === "pow") {
        finalResult = parseFloat(primaryArr.join("")) *  parseFloat(primaryArr.join(""));
    } else if(e.target.value === "pow") {
        finalResult = Math.sqrt(parseFloat(primaryArr.join("")));
    }
    secondaryArr = [...primaryArr];
    secondaryArr.push(" ");
    secondaryArr.push(e.target.value);
    updateSecondary();
    primary.innerHTML = "";
    primaryArr = [];
    console.log(finalResult);
}

// Event Listeners
buttons[0].addEventListener("click", clear);
buttons[1].addEventListener("click", equal);

buttons.forEach(function(btn) {
    if(btn.dataset.type === "number") {
        btn.addEventListener("click", addNumber);
    } 

    if(btn.dataset.type === "operator"){
        btn.addEventListener("click", addOperator);
    }    
});
