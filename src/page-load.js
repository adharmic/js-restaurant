import HomePage from './home-page';
import AboutPage from './about-page';
import MenuPage from './menu-page';

import Wood from './assets/Wood.jpg'
import Fav from './assets/favicon.png';

const PageLoad = () => {
    var link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);

    link.href = Fav;

    const bgWood = new Image();
    bgWood.src = Wood;

    document.body.style.backgroundImage = `url(${bgWood})`;

    let tabs = document.querySelectorAll('.nav-tab');

    tabs.forEach(element => {
        element.addEventListener("click", (e) => {
            let prevActive = document.querySelector('.active');
            prevActive.classList.remove('active');
            prevActive.classList.add('inactive');
            e.target.classList.remove('inactive');
            e.target.classList.add('active');

            if (e.target.id == "home-page") {
                HomePage();
            }

            if (e.target.id == "menu-page") {
                MenuPage();
            }

            if (e.target.id == "about-page") {
                AboutPage();
            }
        })
    });

    HomePage();
    // let content = document.querySelector('#content');
    

    // content.appendChild(tavernSign);
    return;
};

export default PageLoad;