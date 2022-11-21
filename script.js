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

console.log(calculateResult(44, 20,'/'));