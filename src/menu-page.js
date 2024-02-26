import Turkey from './assets/Turkey.png';
import Ale from './assets/Ale.png';
import Charcuterie from './assets/Charcuterie.png';
import Stew from './assets/Stew.png';
import Wine from './assets/Wine.png';
import Pie from './assets/Pie.png';

const addMenuItem = (menu, image, name, desc) => {
    let menuCard = document.createElement('div');
    menuCard.classList.add('card');
    menuCard.classList.add('menu-card');

    let menuImage = new Image();
    menuImage.src = image;

    let descDiv = document.createElement('div');
    descDiv.classList.add('menu-desc');

    let itemName = document.createElement('h2');
    itemName.textContent = name;

    let itemDesc = document.createElement('h3');
    itemDesc.textContent = desc;

    descDiv.appendChild(itemName);
    descDiv.appendChild(itemDesc);

    menuCard.appendChild(menuImage);
    menuCard.appendChild(descDiv);

    menu.appendChild(menuCard);
};

const MenuPage = () => {
    let content = document.querySelector('#content');

    let menuCards = document.createElement('div');
    menuCards.classList.add('card-wrapper');
    
    addMenuItem(menuCards, Turkey, "Turkey Leg", "Flame-grilled turkey leg. Cooked to perfection. Tender and juicy - a staple of the Swanswaggle.");
    addMenuItem(menuCards, Ale, "Swan's Feather IPA", "This homebrewed ale has notes of hops and evokes scents of fresh citrus.");
    addMenuItem(menuCards, Charcuterie, "Swancuterie Sampler", "Enjoy an assortment of local meats, fruits, and cheeses. Prepared fresh and chosen by the chef.");
    addMenuItem(menuCards, Stew, "House Stew", "The classic Swanswaggle Stew. Bone broth with all of the essential spices and veggies.");
    addMenuItem(menuCards, Wine, "Elderberry Wine", "A perfect, oak-aged wine with the tart and sweet taste of home-grown elderberries.");
    addMenuItem(menuCards, Pie, "Baked Apple Pie", "Steaming hot apple pie made with apples picked from our own orchard. Tastes like home.");

    content.replaceChildren(menuCards);
};

export default MenuPage;