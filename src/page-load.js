import Sign from './assets/tavern_sign.jpg';

const PageLoad = () => {
    let content = document.querySelector('#content');
    
    const tavernSign = new Image();
    tavernSign.src = Sign;

    content.appendChild(tavernSign);
    return;
};

export default PageLoad;