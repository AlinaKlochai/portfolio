const showAllUnis = document.getElementById('showAllUnis');

showAllUnis.addEventListener('click', getAllUnis);

function getAllUnis() {
    const url = 'http://universities.hipolabs.com/search?country=Germany';

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch universities data');
            }
            return response.json();
        })
        .then(data => {
            const universitiesList = document.createElement('ul'); // Создаем элемент <ul> для списка университетов
            data.forEach(university => {
                const universityItem = document.createElement('li'); // Создаем элемент <li> для каждого университета

                // Если у университета есть веб-сайт, создаем ссылку для перехода
                if (university.web_pages && university.web_pages.length > 0) {
                    const websiteLink = document.createElement('a');
                    websiteLink.textContent = university.name;
                    websiteLink.href = university.web_pages[0]; // Берем первый веб-сайт из списка (если у университета их несколько)
                    websiteLink.target = '_blank'; // Открываем ссылку в новой вкладке
                    websiteLink.rel = 'noopener noreferrer'; // Добавляем рекомендуемые атрибуты безопасности
                    universityItem.appendChild(websiteLink); // Добавляем ссылку в элемент <li>
                } else {
                    universityItem.textContent = university.name; // Если веб-сайта нет, добавляем просто текст
                }

                universitiesList.appendChild(universityItem); // Добавляем элемент <li> в элемент <ul>
            });
            document.body.appendChild(universitiesList); // Добавляем элемент <ul> в тело документа
        })
        .catch(error => {
            console.error(error.message);
        });
}
