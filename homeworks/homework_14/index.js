const spaceshep = {
    name: 'Space Number1',
    manufacturer: 'NASA',
    crew: 4,
    maxSpeed: "4.0x lightspeed",

};

const nameShip = document.getElementById('name');
const manufacturer = document.getElementById('manufacturer');
const crew = document.getElementById('crew');
const maxSpeed = document.getElementById('maxSpeed');
const hideBtn = document.getElementById('hide');
const showCrewBtn = document.getElementById('showCrew');
const crewContainer = document.getElementById('crewContainer');

nameShip.textContent = `Name: ${spaceshep.name}`;
manufacturer.textContent = `Manufacturer: ${spaceshep.manufacturer}`;
crew.textContent = `Crew: ${spaceshep.crew}`;
maxSpeed.textContent = `Max Speed: ${spaceshep.maxSpeed}`;


//create hide-effect
hideBtn.addEventListener('click', () => {
    if (hideBtn.textContent === "HIDE") { 
        manufacturer.style.visibility = 'hidden';
        hideBtn.textContent = "SHOW";                   
    } else {
        manufacturer.style.visibility = 'visible';
        hideBtn.textContent = "HIDE";
    }                    
});

//show crew
showCrewBtn.addEventListener('click', () => {
    if (crewContainer.style.display === 'none') {
        crewContainer.style.display = 'flex';                   // Показать контейнер с карточками
        showCrewBtn.textContent = "HIDE CREW";
    } else {
        crewContainer.style.display = 'none';                    //hide crew
        showCrewBtn.textContent = "SHOW CREW";
    }                             
});


//create crewPreCards
function createCrewCard(person, id){
    const crewCard = document.getElementById(id);
    crewCard.innerHTML = `<h2>${person.name} ${person.lastName}</h2>
    <p>Age: ${person.age}</p>`;
};


const persons = [
    {
        name: 'Ban',
        lastName: 'Jones',
        age: 32
    },
    {
        name: 'Falk',
        lastName: 'Heimat',
        age: 38
    },
    {
        name: 'Kan',
        lastName: 'Klein',
        age: 39
    },
    {
        name: 'David',
        lastName: 'Huggens',
        age: 35
    }
];


// Создание карточек для каждого члена экипажа
persons.forEach((person, index) => {
    createCrewCard(person, 'person' + (index + 1));
});



