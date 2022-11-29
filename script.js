let firstOperand = '';
let secondOperand = '';
let operator = '';
let result = '';

function addNumbers(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
};

function subtractNumbers(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
};

function multiplyNumbers(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
};

function divideNumbers(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
};

function calculateResult(firstNumber, secondNumber, operator) {
    switch(true) {
        case (operator === '+'):
            return addNumbers(firstNumber, secondNumber);
        case (operator === '-'):
            return subtractNumbers(firstNumber, secondNumber);
        case (operator === '*'):
            return multiplyNumbers(firstNumber, secondNumber);
        case (operator === '/'):
            return divideNumbers(firstNumber, secondNumber);
        };    
};

const display = document.getElementById('display');

function updateDisplay(currentValue, currentID) {
    if (currentID == 'allClear' || currentID == 'equalsSign') {
        display.value = '';
    } else if (currentValue == '+' || currentValue == '-' || currentValue == '×' || currentValue == '÷') {
        firstOperand = display.value;
        console.log(`first operand is ${firstOperand}`);
        display.value += currentValue;
    } else {
        display.value += currentValue;
    };
};

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        updateDisplay(button.textContent, button.id);
    });
});