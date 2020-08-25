import Logo from './components/Logo';

import './scss/app.scss';

const app = () => {
    document.querySelector('.main-page__container').innerHTML = Logo();
}

app();