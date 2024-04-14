console.log("Task 1:");
//Есть массив строк. Вывести каждую строку в div и вывести в документ

function stringsAddToDokument(strings) {
    if (typeof document !== 'undefined') {                  // without this was a problem with node(document was a undefined)result of function was only in browser
        for (let i = 0; i < strings.length; i++) {
            const div = document.createElement('div');
            div.textContent = strings[i];
            document.body.appendChild(div);
        }
    } else {
        for (let i = 0; i < strings.length; i++) {
            console.log(strings[i]);
        }
    }

}

const strings = ["First string", "Second string", "Third string"];
stringsAddToDokument(strings);

console.log("----------------------------------------");
console.log("Task 2:");
console.log("make all elements RED");
//На странице есть div с текстом и кнопка ok , сделать так , чтобы кнопка красила текст в красный цвет при нажатии

function makeAllDivsInRed() {
    if (typeof document !== 'undefined') {
        const divs = document.querySelectorAll('div');

        const okButton = document.createElement('button');
        okButton.textContent = 'OK';
        okButton.id = 'okButton';
        document.body.appendChild(okButton);

        okButton.addEventListener('click', function() {
            for (let i = 0; i < divs.length; i++) {
                divs[i].style.color = 'red';
            }
        });
    } else {
        console.log("This functionality is only available in a browser environment.");
    }
}

makeAllDivsInRed();


console.log("----------------------------------------");
console.log("Task 3:");
//Сделать кнопку, которая добавляет карточки на странице
//в каждой карточке есть заголовок, текст и картинка (url картинки можо использовать одинаковый)

function createBottonForCards() {
    if (typeof document !== 'undefined') {
        const createCardButton = document.createElement('button');
        createCardButton.textContent = 'CREATE NEW CARD';
        createCardButton.id = 'addCardButton';             //используем id 'addCardButton', чтобы совпадал с элементом, на который назначается обработчик события
        document.body.appendChild(createCardButton);

        // Добавляем обработчик события для кнопки "Добавить карточку"
        createCardButton.addEventListener('click', function() {
            createCard('New card', 'Description of the new card', 'https://fthmb.tqn.com/X46F1PuWJuhGdwkhM8UlU5GxUnE=/1372x1800/filters:fill(auto,1)/Simpsons_09_Homer_V2F_hires1-56e1eccc5f9b5854a9f89a63.jpg');
        });
    } else {
        console.log("This functionality is only available in a browser environment.");
    }
}

function createCard(title, text, imgUrl) {
    const card = document.createElement('div');
    card.classList.add('card');
    
    const cardTitle = document.createElement('h2');
    cardTitle.textContent = title;
    
    const cardText = document.createElement('p');
    cardText.textContent = text;
    
    const cardImage = document.createElement('img');
    cardImage.src = imgUrl;
    
    //добавляем элементы в карточку
    card.appendChild(cardTitle);
    card.appendChild(cardText);
    card.appendChild(cardImage);
    
    //добавляем карточку на страницу
    const cardContainer = document.getElementById('cardContainer');
    cardContainer.appendChild(card);
}

// Вызываем функцию для создания кнопки "CREATE NEW CARD"
createBottonForCards();
