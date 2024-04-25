const timerElement = document.getElementById('timer');
const startButton = document.getElementById('startButton');
const numberButtons = document.querySelectorAll('.num');

let timerValue = ''; 
let intervalId;


function updateTimer() {
    timerElement.textContent = timerValue || '0'; // если timerValue пусто, то отображаем 0
}

function addNumberToTimer(number) {
    timerValue += number;
    updateTimer();
}

function startTimer() {
    let counter = parseInt(timerValue);       // преобразовывем timerValue в число

    // Проверяем, является ли counter числом
    if (!isNaN(counter)) {
        intervalId = setInterval(() => {
            timerElement.textContent = counter;
            counter -= 1;
            if (counter < -1) {
                clearInterval(intervalId);
                alert('Time\'s up!');
                timerValue = '';         // сбрасываем значение таймера после окончания отсчета
                updateTimer();
            }
        }, 1000);
    } else {
        alert('Please enter a valid time before starting the timer.');    // выводим сообщение об ошибке, если время не было введено
    }
}


numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        const number = button.textContent;
        addNumberToTimer(number);
    });
});

const aacButton = document.querySelector('.aac-Btn');

aacButton.addEventListener('click', () => {
    timerValue = timerValue.slice(0, -1);                 // удаляем последний символ из строки timerValue
    updateTimer();
});


startButton.addEventListener('click', startTimer);
