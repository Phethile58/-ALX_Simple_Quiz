function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    if(number1 === 0){
        return "cannot divide by zero";
    }
    return number1 / number2;
}

document.getElementById('add').addEventListener('click', function() {
    calculateAndDisplay(add);
});

document.getElementById('subtract').addEventListener('click', function() {
    calculateAndDisplay(subtract);
});

document.getElementById('multiply').addEventListener('click', function() {
    calculateAndDisplay(multiply)
});

document.getElementById('divide').addEventListener('click', function (){
    calculateAndDisplay(divide);
});

function calculateAndDisplay(operation) {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number').value) || 0;
    const result = operation(number1, number2);
    document.getElementById('calculate-result').textContent = result;
}