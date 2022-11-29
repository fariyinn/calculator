let firstOperand = '';
let secondOperand = '';
let operator = '';
let result = '';

function addNumbers(firstOperand, secondOperand) {
    return parseFloat(firstOperand) + parseFloat(secondOperand);
};

function subtractNumbers(firstOperand, secondOperand) {
    return firstOperand - secondOperand;
};

function multiplyNumbers(firstOperand, secondOperand) {
    return firstOperand * secondOperand;
};

function divideNumbers(firstOperand, secondOperand) {
    return firstOperand / secondOperand;
};

function calculateResult(firstOperand, secondOperand, operator) {
    switch(true) {
        case (operator === '+'):
            return addNumbers(firstOperand, secondOperand);
        case (operator === '-'):
            return subtractNumbers(firstOperand, secondOperand);
        case (operator === '×'):
            return multiplyNumbers(firstOperand, secondOperand);
        case (operator === '÷'):
            return divideNumbers(firstOperand, secondOperand);
        };    
};

const display = document.getElementById('display');

function updateDisplay(currentValue) {
    if (currentValue == 'AC') {
        display.value = '';
    } else if (currentValue == '+' || currentValue == '-' || currentValue == '×' || currentValue == '÷') {
        firstOperand = display.value;
        operator = currentValue;
        console.log(`first operand is ${firstOperand}`);
        console.log(`operator is ${operator}`);
        display.value = '';
    } else if (currentValue == '=') {
        secondOperand = display.value;
        console.log(`second operand is ${secondOperand}`);
        result = calculateResult(firstOperand,secondOperand,operator);
        display.value = result;
        console.log(`result is ${result}`);
    } else {
        display.value += currentValue;
    };
};

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        updateDisplay(button.textContent);
    });
});