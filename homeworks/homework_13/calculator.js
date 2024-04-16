const calcInput = document.getElementById('calcInput');
let currentNum = '';
let prevNum = '';
let sign = null;
let exampleString = ''; // Строка для хранения примера

// Обновление дисплея
function updateDisplay() {
    calcInput.value = exampleString + currentNum;
}

// Обработка нажатия кнопок цифр
const numButtons = document.getElementsByClassName('num');
for (let i = 0; i < numButtons.length; i++) {
    numButtons[i].addEventListener('click', (e) => {
        currentNum += e.target.innerText;
        updateDisplay();
    });
}

// Обработка нажатия математических знаков
const signButtons = document.getElementsByClassName('sign');
for (let i = 0; i < signButtons.length; i++) {
    signButtons[i].addEventListener('click', (e) => {
        if (currentNum !== '') {
            prevNum = currentNum;
            currentNum = '';
            sign = e.target.innerText;
            exampleString = prevNum + sign;
            updateDisplay();
        }
    });
}

// Обработка нажатия кнопки "="
const resBtn = document.getElementById('res');
resBtn.addEventListener('click', () => {
    if (currentNum !== '' && prevNum !== '' && sign !== null) {
        const result = calculate();
        calcInput.value = result;
        currentNum = result.toString();
        prevNum = '';
        sign = null;
        exampleString = '';
    }
});

// Обработка нажатия кнопки AC (очистка)
const acBtn = document.getElementById('ac');
acBtn.addEventListener('click', () => {
    clear();
});

// Функция очистки всех значений
function clear() {
    calcInput.value = '';
    currentNum = '';
    prevNum = '';
    sign = null;
    exampleString = '';
}

// Функция вычисления результата
function calculate() {
    const num1 = parseFloat(prevNum);
    const num2 = parseFloat(currentNum);
    switch (sign) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                alert("Division by zero is not allowed!");
                return '';
            }
            return num1 / num2;
        default:
            return '';
    }
}