let firstOperand = '';
let secondOperand = '';
let operator = '';
let result = '';

const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
const decimal = document.getElementById('decimal');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        updateDisplay(button.textContent);
    });
});

window.addEventListener('keydown', applyPressedKey);

function applyPressedKey(e) {
    switch (true) {
        case (e.key >= '0' && e.key <= '9'):
        case (e.key == '+' || e.key == '-' || e.key == '^' || e.key == '=' || e.key == '.'):
            updateDisplay(e.key);
            break;

        case (e.key == '/'):
            updateDisplay('÷')
            break;

        case (e.key == '*'):
            updateDisplay('×');
            break;

        case (e.key == 'Enter'):
            updateDisplay('=');
            break;

        case (e.key === 'Escape'):
            updateDisplay('AC');
            break;

        case (e.key === 'Backspace'):
            updateDisplay('←');
            break;
    };
};

function updateDisplay(currentValue) {
    switch (true) {
        case (currentValue == 'AC'):
            clearAllValues();
            break;

        case (currentValue === '+/-'):
            changeOperandSign();
            break;

        case (currentValue == '←'):
            checkIfLastDigitDecimal();
            removeLastDigit();
            break;

        case (currentValue == '.'):
            addCurrentValue(currentValue);
            disableDecimal();
            break;

        case (display.value == '' && currentValue == '0'):
        case (currentValue == '0' && (display.value == firstOperand || display.value == secondOperand || display.value == result)):
            clearDisplay();
            break;

        case (currentValue == '+' || currentValue == '-' || currentValue == '×' || currentValue == '÷' || currentValue == '^'):
            checkForExistingOperands();
            checkForExistingOperation();
            storeOperator(currentValue);
            break;

        case (currentValue == '=' && firstOperand == '' && secondOperand == '' && operator == ''):
        case (currentValue == '=' && display.value == '' && secondOperand == ''):
            displayErrorMessage();
            break;

        case (currentValue == '='):
            storeSecondOperand();
            storeResult();
            roundResult();
            displayResult();
            CheckIfResultNaN();
            enableDecimal();
            break;

        case (display.value == firstOperand || display.value == secondOperand || display.value == result):
        case (display.value == result && currentValue == '.'):
            clearDisplay();
            addCurrentValue(currentValue);
            break;

        default:
            addCurrentValue(currentValue);
    };
};

function changeOperandSign() {
    display.value = display.value * -1;
};

function CheckIfResultNaN() {
    if (isNaN(display.value)) {
        displayErrorMessage();
    };
};

function checkIfLastDigitDecimal() {
    if (display.value.slice(-1) == '.') {
        enableDecimal();
    };
};

function removeLastDigit() {
    display.value = display.value.slice(0, -1);
};

function addCurrentValue(currentValue) {
    display.value += currentValue;
};

function disableDecimal() {
    decimal.disabled = true;
};

function enableDecimal() {
    decimal.disabled = false;
};

function displayErrorMessage() {
    display.value = 'ERROR: PRESS AC';
};

function checkForExistingOperands() {
    if (firstOperand == '') {
        storeFirstOperand();
        enableDecimal();
    } else if (firstOperand != '' && secondOperand == '') {
        storeSecondOperand();
        enableDecimal();
    };
};

function checkForExistingOperation() {
    if (firstOperand != '' && secondOperand != '') {
        storeResult();
        roundResult();
        displayResult();
        resetFirstOperandToResult();
        clearAllButFirstOperand();
    };
};

function clearAllValues() {
    firstOperand = '';
    secondOperand = '';
    operator = '';
    result = '';
    display.value = '';
    enableDecimal();
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

function roundResult() {
    result = Math.round(result * 100) / 100;
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
        case (operator === '^'):
            return powerOperands(firstOperand, secondOperand);
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

function powerOperands(firstOperand, secondOperand) {
    return Math.pow(firstOperand, secondOperand);
};