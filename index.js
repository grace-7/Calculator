let numOne = "";
let numTwo = "";
let activeNum = 1;
let operatorChosen;

function add(numOne, numTwo) {
    return parseInt(numOne) + parseInt(numTwo);
}

function subtract(numOne, numTwo) {
    return parseInt(numOne) - parseInt(numTwo);
}

function multiply(numOne, numTwo) {
    return parseInt(numOne) * parseInt(numTwo);
}

function divide(numOne, numTwo) {
    if (numTwo != 0) {
        return parseInt(numOne) / parseInt(numTwo);
    } else {
        alert("Please don't divide by zero");
    }
}

function operate() {
    const result = operatorChosen();
    storeValue(result);
}

function numberClicked(event) {
    const numToAdd = event.target.attributes["data-value"].value;

    if (activeNum === 1) {
        numOne += numToAdd;
        storeValue(numOne);
    } else if (activeNum === 2) {
        numTwo += numToAdd;
        storeValue(numTwo);
    }
}

function storeValue(value) {
    const display = document.querySelector("#display");
    display.innerHTML = value;
}

function setupButtonListeners() {
    const numbers = document.querySelectorAll(".number");
    numbers.forEach((numberBtn) => {
        numberBtn.addEventListener("click", numberClicked);
    });

    const addButton = document.querySelector("#add");
    addButton.addEventListener("click", () => {
        activeNum = 2;
        operatorChosen = add;
        storeValue("+");
    });

    const subButton = document.querySelector("#subtract");
    subButton.addEventListener("click", () => {
        activeNum = 2;
        operatorChosen = subtract;
        storeValue("-");
    });

    const multButton = document.querySelector("#muiltply");
    multButton.addEventListener("click", () => {
        activeNum = 2;
        operatorChosen = multiply;
        storeValue("*");
    });

    const divisButton = document.querySelector("#divide");
    divisButton.addEventListener("click", () => {
        activeNum = 2;
        operatorChosen = divide;
        storeValue("/");
    });

    const equalsButton = document.querySelector("#equals");
    equalsButton.addEventListener("click", () => {
        activeNum = 1;
        result = operatorChosen(numOne, numTwo);
        storeValue(result);
    });

    const clearButton = document.querySelector("#clear");
    clearButton.addEventListener("click", () => {
        activeNum = 1;
        numOne = "";
        numTwo = "";
        storeValue("0");
    });
}

document.addEventListener("DOMContentLoaded", () => {
    setupButtonListeners();
});
