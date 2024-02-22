import Sign from './assets/Tavern.jpg';

const HomePage = () => {
    let content = document.querySelector('#content');

    let homeDiv = document.createElement('div');
    homeDiv.classList.add("card-wrapper");

    let heroText = document.createElement('div');
    heroText.classList.add('card');

    let mainText = document.createElement('h1');
    mainText.textContent = "Welcome to Ye Olde Swanswaggle!";

    let subText = document.createElement('h3');
    subText.textContent = "The Swanswaggle Tavern is a bastion of merry-making, ale, and the best turkey legs you've ever had. Come on down for some delicious homebrew, dancing and singing, perfectly smoked meat, and a warm seat by the hearth."

    heroText.appendChild(mainText);
    heroText.appendChild(subText);

    let imageCard = document.createElement('div');
    imageCard.classList.add('card');

    homeDiv.appendChild(heroText);
    homeDiv.appendChild(imageCard);
    
    const tavernSign = new Image();
    tavernSign.src = Sign;

    imageCard.appendChild(tavernSign);

    content.replaceChildren(homeDiv);
};

export default HomePage;