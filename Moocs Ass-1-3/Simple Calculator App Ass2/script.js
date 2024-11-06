let currentInput = '';
let operator = '';
let previousInput = '';

function inputNumber(num) {
    currentInput += num;
    updateDisplay(currentInput);
}

function inputOperator(op) {
    if (currentInput === '') return;
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function updateDisplay(value) {
    document.getElementById('display').value = value;
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    previousInput = '';
    updateDisplay('');
}

function calculate() {
    if (previousInput === '' || currentInput === '' || operator === '') return;

    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert("Error: Division by zero is not allowed.");
                clearDisplay();
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }

    updateDisplay(result);
    currentInput = result.toString();
    operator = '';
    previousInput = '';
}