document.addEventListener('DOMContentLoaded', function() {
    const delayButton = document.getElementById('delayButton');
    const inputValue = document.getElementById('inputValue');
    const result = document.getElementById('result');
    const loader = document.getElementById('loader');

    delayButton.addEventListener('click', function() {
        // получаем значение из текстового поля
        const value = inputValue.value;

        // скрываем результат и ошибку
        result.innerText = '';
        result.classList.remove('error');

        // показываем индикатор загрузки
        loader.style.display = 'block';

        // Выполняем delay с введенным значением
        delay(value)
            .then(data => {
                result.innerText = 'Result: ' + data;
            })
            .catch(err => {
                result.innerText = 'Error: ' + err;
                result.classList.add('error');
            })
            .finally(() => {
                // скрываем индикатор загрузки после получения результата или ошибки
                loader.style.display = 'none';
            });
    });
});

function delay(value) {
    return new Promise((resolve, reject) => {
        if (isNaN(value)) {
            reject('The argument is not a number');
        } else {
            setTimeout(() => {
                resolve(value * value);
            }, 5000);
        }
    });
}