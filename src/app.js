import LogoAnimations from './scripts/Animations/LogoAnimations';
import NavItemAnimations from './scripts/Animations/NavItemsAnimations';
import NavLinks from './scripts/Animations/NavLinks/NavLinks';
import CenterView from './scripts/CenterView';
import contactPagePosition from './scripts/pagePositioning/contactPagePosition'
import AnimationRouter from './scripts/AnimationRouter';


import anime from 'animejs/lib/anime.es.js';

import './scss/app.scss';

const app = () => {
    CenterView();
    contactPagePosition();
    AnimationRouter();
    LogoAnimations('.logo__underline', '.logo__cover', 0);
    LogoAnimations('.navigation__underline', '.navigation__cover', 900);
    NavItemAnimations();
    NavLinks();


}

app();