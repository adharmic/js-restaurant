import Map from './assets/Map.png'

const addHours = (table) => {
    let mon = document.createElement('h3');
    mon.textContent = "MON-FRI";

    table.appendChild(mon);

    let monTime = document.createElement('h3');
    monTime.textContent = "9:00 - 17:30";

    table.appendChild(monTime);

    let sat = document.createElement('h3');
    sat.textContent = "SAT";

    table.appendChild(sat);

    let satTime = document.createElement('h3');
    satTime.textContent = "12:00 - 23:00";

    table.appendChild(satTime);

    let sun = document.createElement('h3');
    sun.textContent = "SUN"

    table.appendChild(sun);

    let sunTime = document.createElement('h3');
    sunTime.textContent = "CLOSED";

    table.appendChild(sunTime);
}

const AboutPage = () => {
    let content = document.querySelector('#content');

    let aboutDiv = document.createElement('div');
    aboutDiv.classList.add("card-wrapper");

    let heroCard = document.createElement('div');
    heroCard.classList.add('card');

    let aboutText = document.createElement('h3');
    aboutText.textContent = "Ye Olde Swanswaggle is located in sunny Caer Lyon. Make a left past the Tower of Avarice and you'll see it straight ahead!";

    heroCard.appendChild(aboutText);

    let mapCard = document.createElement('div');
    mapCard.classList.add('card');

    let mapImage = new Image();
    mapImage.src = Map;

    mapCard.appendChild(mapImage);

    let contactCard = document.createElement('div');
    contactCard.classList.add('card');

    let contactText = document.createElement('h3');
    contactText.innerHTML = "To ask about allergy information and reservation statuses, please send your pigeon to our pigeonhole numbered <br /> 1 (555) GET-BEER.";

    contactCard.appendChild(contactText);

    let hoursCard = document.createElement('div'); 
    hoursCard.classList.add('card');

    let hoursHeader = document.createElement('h1');
    hoursHeader.textContent = "Operating Hours";

    let hoursTable = document.createElement('div');
    hoursTable.id = 'hours-table';

    addHours(hoursTable);

    hoursCard.appendChild(hoursHeader);
    hoursCard.appendChild(hoursTable);

    aboutDiv.appendChild(heroCard);
    aboutDiv.appendChild(mapCard);
    aboutDiv.appendChild(contactCard);
    aboutDiv.appendChild(hoursCard);

    content.replaceChildren(aboutDiv);
};

export default AboutPage;