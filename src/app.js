import LogoAnimations from './scripts/Animations/LogoAnimations';
import NavItemAnimations from './scripts/Animations/NavItemsAnimations';
import NavLinks from './scripts/Animations/NavLinks/NavLinks';
import CenterView from './scripts/CenterView';
import allPagesPosition from './scripts/pagePositioning/allPagesPosition';
import AnimationRouter from './scripts/AnimationRouter';
import correctPosition from './scripts/Lines/correctPosition';


import './scss/app.scss';

const app = () => {
    CenterView();
    allPagesPosition();
    AnimationRouter();
    LogoAnimations('.logo__underline', '.logo__cover', 0);
    LogoAnimations('.navigation__underline', '.navigation__cover', 900);
    NavItemAnimations();
    NavLinks();

    correctPosition();
}

app();