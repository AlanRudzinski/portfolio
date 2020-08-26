import Logo from './components/Logo';
import Navigation from './components/Navigation';

import './scss/app.scss';

const app = () => {
    let mainPage = document.querySelector('.main-page__container');
    mainPage.innerHTML += Logo();
    mainPage.innerHTML += Navigation();
}

app();