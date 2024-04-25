let counter = 60;
let intervalId;

const timerElement = document.getElementById('timer');
const startButton = document.getElementById('startButton');

function startTimer() {
    clearInterval(intervalId);
    counter = 60;
    intervalId = setInterval(() => {
        timerElement.textContent = counter;
        counter -= 1;
        if (counter < 0) {
            clearInterval(intervalId);

            timerElement.textContent = 'Time\'s up!';
        }
    }, 1000);
}

startButton.addEventListener('click', startTimer);
