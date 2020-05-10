//GET

let numbers = document.querySelectorAll("[data-number]");
let bigNumber = document.querySelector(".big-number");
let smallNumber = document.querySelector(".partial-result");
let plusOperator = document.querySelector("#plus");
let minusOperator = document.querySelector("#minus");
let timesOperator = document.querySelector("#times");
let divideOperator = document.querySelector("#divide");
let equalsOperator = document.querySelector("#equals");
let clearOperator = document.querySelector("#clear");
let backspaceOperator = document.querySelector("#backspace");
let dot = document.querySelector("[data-dot]");
let pleft = document.querySelector("[data-pleft]");
let pright = document.querySelector("[data-pright]");

//FUNCTIONS

function add(a,b){
    return a+b;
}

function substract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function percentage(a,b){
    return b*100/a;
}

function squareroot(a){
    return Math.sqrt(a);
}

function clear(){
    bigNumber.textContent = "";
    smallNumber.textContent = "";
}

function appendNumber(a){
    bigNumber.textContent += a;
    smallNumber.textContent = parsePlusSeparatedExpression(bigNumber.textContent);
}

function backspace(){
    if(bigNumber.textContent.length <= 1 || bigNumber.textContent === "NaN" || bigNumber.textContent === "Infinity"){
        clear();
        return;
    }
    bigNumber.textContent = bigNumber.textContent.slice(0,-1);
    smallNumber.textContent = parsePlusSeparatedExpression(bigNumber.textContent);
}

//PROGRAM

clear();

numbers.forEach(number => {
    number.addEventListener("click", () => {
        appendNumber(number.textContent);
    });
});

plusOperator.addEventListener("click", () => {
    bigNumber.textContent += "+";
});

minusOperator.addEventListener("click", () => {
    bigNumber.textContent += "-";
});

timesOperator.addEventListener("click", () => {
    bigNumber.textContent += "*";
});

divideOperator.addEventListener("click", () => {
    bigNumber.textContent += "/";
});

equalsOperator.addEventListener("click", () => {
    bigNumber.textContent = smallNumber.textContent;
});

clearOperator.addEventListener("click", () => {
    clear();
});

backspaceOperator.addEventListener("click", () => {
    backspace();
});

dot.addEventListener("click", () => {
    bigNumber.textContent += ".";
});

pleft.addEventListener("click", () => {
    appendNumber("(");
});

pright.addEventListener("click", () => {
    appendNumber(")");
});