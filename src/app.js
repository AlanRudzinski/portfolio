import LogoAnimations from './components/Animations/LogoAnimations';
import NavItemAnimations from './components/Animations/NavItemsAnimations';

import anime from 'animejs/lib/anime.es.js';

import './scss/app.scss';

const app = () => {
    LogoAnimations('.logo__underline', '.logo__cover', 0);
    LogoAnimations('.navigation__underline', '.navigation__cover', 900);
    NavItemAnimations();
}

app();