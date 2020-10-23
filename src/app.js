import LogoAnimations from './scripts/Animations/LogoAnimations';
import NavItemAnimations from './scripts/Animations/NavItemsAnimations';
import NavLinks from './scripts/Animations/NavLinks/NavLinks';
import CenterView from './scripts/CenterView';
import allPagesPosition from './scripts/pagePositioning/allPagesPosition';
import AnimationRouter from './scripts/AnimationRouter';
import drawLine from './scripts/Lines/drawLine';


import './scss/app.scss';

const app = () => {
    CenterView();
    allPagesPosition();
    // drawLine();
    AnimationRouter();
    LogoAnimations('.logo__underline', '.logo__cover', 0);
    LogoAnimations('.navigation__underline', '.navigation__cover', 900);
    NavItemAnimations();
    NavLinks();
}

app();