import LogoAnimations from './components/Animations/LogoAnimations';
import NavItemAnimations from './components/Animations/NavItemsAnimations';
import NavItemLeadingLinesAboutMe from './components/Animations/NavItemsLeadingLinesAboutMe';
import CenterView from './components/CenterView';

import anime from 'animejs/lib/anime.es.js';

import './scss/app.scss';

const app = () => {
    CenterView();
    LogoAnimations('.logo__underline', '.logo__cover', 0);
    LogoAnimations('.navigation__underline', '.navigation__cover', 900);
    NavItemAnimations();
    NavItemLeadingLinesAboutMe();
}

app();