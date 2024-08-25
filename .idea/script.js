let display = document.getElementById('display');

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    display.value += operator;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateSqrt() {
    display.value = Math.sqrt(eval(display.value));
}

function calculatePower() {
    display.value = Math.pow(eval(display.value), 2);
}

function calculateFactorial() {
    let num = parseInt(display.value);
    let fact = 1;
    for (let i = 2; i <= num; i++) {
        fact *= i;
    }
    display.value = fact;
}

function calculateLog() {
    display.value = Math.log10(eval(display.value));
}

function calculateTrig(func) {
    let value = eval(display.value);
    switch (func) {
        case 'sin':
            display.value = Math.sin(value * Math.PI / 180);
            break;
        case 'cos':
            display.value = Math.cos(value * Math.PI / 180);
            break;
        case 'tan':
            display.value = Math.tan(value * Math.PI / 180);
            break;
        default:
            display.value = 'Error';
    }
}
