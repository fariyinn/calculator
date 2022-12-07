let firstOperand = '';
let secondOperand = '';
let operator = '';
let result = '';

const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        updateDisplay(button.textContent);
    });
});

function updateDisplay(currentValue) {
    switch (true) {
        case (currentValue == 'AC'):
            clearAllValues();
            break;

        case (currentValue == '+' || currentValue == '-' || currentValue == '×' || currentValue == '÷'):
            storeFirstOperand();
            storeOperator(currentValue);
            clearDisplay();
            break;

        case (currentValue == '='):
            storeSecondOperand();
            storeResult();
            displayResult();
            resetFirstOperandToResult();
            clearAllButFirstOperand();
            break;

        default:
            display.value += currentValue;
    };
};

function clearAllValues() {
    firstOperand = '';
    secondOperand = '';
    operator = '';
    result = '';
    display.value = '';
};

function storeFirstOperand() {
    firstOperand = display.value;
};

function storeOperator(currentValue) {
    operator = currentValue;
};

function clearDisplay() {
    display.value = '';
};

function storeSecondOperand() {
    secondOperand = display.value;
};

function storeResult() {
    result = calculateResult(firstOperand,secondOperand,operator);
};

function displayResult() {
    display.value = result;
};

function resetFirstOperandToResult() {
    firstOperand = result;
};

function clearAllButFirstOperand() {
    secondOperand = '';
    operator = '';
    result = '';
};

function calculateResult(firstOperand, secondOperand, operator) {
    switch (true) {
        case (operator === '+'):
            return addOperands(firstOperand, secondOperand);
        case (operator === '-'):
            return subtractOperands(firstOperand, secondOperand);
        case (operator === '×'):
            return multiplyOperands(firstOperand, secondOperand);
        case (operator === '÷'):
            return divideOperands(firstOperand, secondOperand);
        };    
};

function addOperands(firstOperand, secondOperand) {
    return parseFloat(firstOperand) + parseFloat(secondOperand);
};

function subtractOperands(firstOperand, secondOperand) {
    return firstOperand - secondOperand;
};

function multiplyOperands(firstOperand, secondOperand) {
    return firstOperand * secondOperand;
};

function divideOperands(firstOperand, secondOperand) {
    return firstOperand / secondOperand;
};