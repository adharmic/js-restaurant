

const AboutPage = () => {
    let content = document.querySelector('#content');

    let aboutDiv = document.createElement('div');
    aboutDiv.classList.add("card-wrapper");

    let heroText = document.createElement('div');
    heroText.classList.add('card');

    let aboutText = document.createElement('h3');
    aboutText.textContent = "Ye Olde Swanswaggle is located in sunny Caer Lyon. Make a left past the Tower of Avarice and you'll see it straight ahead!";

    heroText.appendChild(aboutText);

    aboutDiv.appendChild(heroText);

    content.replaceChildren(aboutDiv);
};

export default AboutPage;