import HomePage from './home-page';
import Wood from './assets/Wood.jpg'

const PageLoad = () => {
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

            // Switch page content
        })
    });

    HomePage();
    // let content = document.querySelector('#content');
    

    // content.appendChild(tavernSign);
    return;
};

export default PageLoad;