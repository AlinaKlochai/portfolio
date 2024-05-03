const apiKey = 'aabb7198e3330c26cf711e640e58f945';
const enterCityBtn = document.getElementById('enterCityBtn');
const inputCurrentCity = document.getElementById('inputCurrentCity');
const weatherInfoDiv = document.getElementById('weatherInfo');
const loader = document.getElementById('loader');

function showLoader() {
    loader.style.display = 'block';
}


function hideLoader() {
    loader.style.display = 'none';
}


function fetchWeatherData(cityName) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch weather data');
            }
            return response.json();
        });
}


function formatDate(date) {
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
}


function displayBasicWeatherInfo(date, temp, feelsLike, description, iconUrl) {
    const weatherInfoHTML = `
        <p><strong>Date</strong></p>
        <p>${date}</p>
        <br>
        <p><strong>Temperature</strong></p>
        <p>${temp} °C</p>
        <br>
        <p><strong>Temperature feels like</strong></p>
        <p>${feelsLike} °C</p>
        <br>
        <p><strong>Weather</strong></p>
        <p>${description}</p>
        <img src="${iconUrl}" alt="Weather icon">
        <!-- Дополнительная кнопка -->
        <button id="additionalButton">More</button>
        <div id="additionalInfo"></div>
    `;
    weatherInfoDiv.innerHTML = weatherInfoHTML;

    // Показываем кнопку additionalButton
    const additionalButton = document.getElementById('additionalButton');
    additionalButton.style.display = 'block';
}


function displayAdditionalWeatherInfo(pressure, humidity) {
    const weatherInfoHTMLMoreInfo = `
        <p><strong>Pressure</strong></p>
        <p>${pressure}</p>
        <br>
        <p><strong>Humidity</strong></p>
        <p>${humidity}</p>
        <br>
    `;
    const additionalInfoDiv = document.getElementById('additionalInfo');
    additionalInfoDiv.innerHTML = weatherInfoHTMLMoreInfo;
}

// Функция для обновления текста кнопки
function updateButtonText() {
    const additionalButton = document.getElementById('additionalButton');
    if (additionalInfoDisplayed) {
        additionalButton.textContent = 'Less';
    } else {
        additionalButton.textContent = 'More';
    }
}

enterCityBtn.addEventListener('click', function () {
    try {
        const cityName = inputCurrentCity.value;

        // Проверяем, было ли введено имя города
        if (!cityName.trim()) {
            alert("To display weather information, you need to enter the name of the city.");
            return; // Прерываем выполнение функции, чтобы не выполнять запрос
        }

        // Показываем спиннер перед началом запроса данных
        showLoader();

        // Отправляем запрос к API погоды
        fetchWeatherData(cityName)
            .then(data => {
                const currentDate = new Date();
                const formattedDate = formatDate(currentDate);
                const weatherDescription = data.weather[0].main;
                const temperature = Math.round(data.main.temp);
                const tempFeelsLike = Math.round(data.main.feels_like);
                const iconCode = data.weather[0].icon;
                const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;

                // Устанавливаем таймер для отображения данных после задержки
                setTimeout(() => {
                    // Останавливаем анимацию спиннера и отображаем основную информацию
                    hideLoader();
                    displayBasicWeatherInfo(formattedDate, temperature, tempFeelsLike, weatherDescription, iconUrl);
                }, 2000); 
            })
            .catch(error => {
                hideLoader();
                alert('You have entered the wrong city name. Please, try again.');
            });
    } catch (error) {
        console.error('Error:', error);
    }
});

let additionalInfoDisplayed = false; // Флаг для отслеживания отображения дополнительной информации

// Обработчик события для кнопки additionalButton
weatherInfoDiv.addEventListener('click', function (event) {
    if (event.target.id === 'additionalButton') {
        const cityName = inputCurrentCity.value;

        if (!additionalInfoDisplayed) {
            try {
                // Отправляем запрос к API погоды для получения дополнительной информации
                fetchWeatherData(cityName)
                    .then(data => {
                        const pressure = data.main.pressure;
                        const humidity = data.main.humidity;

                        // Отображаем дополнительную информацию о погоде
                        displayAdditionalWeatherInfo(pressure, humidity);
                        additionalInfoDisplayed = true;                          // Устанавливаем флаг отображения дополнительной информации
                        updateButtonText();                                    // Обновляем текст кнопки
                    });
            } catch (error) {
                console.error(error.message);
            }
        } else {
            // Скрываем дополнительную информацию
            const additionalInfoDiv = document.getElementById('additionalInfo');
            additionalInfoDiv.innerHTML = '';                                      // Очищаем содержимое дополнительной информации
            additionalInfoDisplayed = false;                                     // Сбрасываем флаг отображения дополнительной информации
            updateButtonText();                                                  // Обновляем текст кнопки
        }
    }
});


