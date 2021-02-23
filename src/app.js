import LogoAnimations from './scripts/Animations/LogoAnimations';
import NavItemAnimations from './scripts/Animations/NavItemsAnimations';
import NavLinks from './scripts/Animations/NavLinks/NavLinks';
import CenterView from './scripts/pagePositioning/CenterView';
import allPagesPosition from './scripts/pagePositioning/allPagesPosition';
import AnimationRouter from './scripts/AnimationRouter';
import correctPosition from './scripts/Lines/correctPosition';
import DOM from './scripts/commons/DOMelements';
import emailJsInit from './scripts/emailJsInit';

import setDashArrayAndDashOffset from './scripts/Lines/setDashArrayAndDashOffset';
import Glide from '@glidejs/glide'


import './scss/app.scss';
import technologyAnimations from './scripts/Animations/technologyAnimations';
import hmbListener from './scripts/handleBurger';
import animateMobileLines from './scripts/Animations/animateMobileLines';
import PortraitAnimations from './scripts/Animations/PortraitAnimations';
import { scrambleAllElements } from './scripts/textScramble';

const app = () => {
    technologyAnimations();
    allPagesPosition();
    LogoAnimations('.logo__underline', '.logo__cover', 0);
    LogoAnimations('.navigation__underline', '.navigation__cover', 900);
    AnimationRouter();
    NavItemAnimations();
    NavLinks();
    console.log(DOM.hmgLinks)
    correctPosition();
    // set dasharray after correct posittion because length can change
    setDashArrayAndDashOffset(DOM.svgs);

    emailJsInit();

    new Glide('.glide', {
        dragThreshold: false,
    }).mount();
    if(window.innerWidth < 600) {
        // window.addEventListener('scroll', () => window.scrollY > 450 ? PortraitAnimations() : '')
        PortraitAnimations(); // todo: on scroll
        scrambleAllElements(); // todo: onscroll
        new Glide('.glide_tech', {
            dragThreshold: false,
        }).mount();
        setDashArrayAndDashOffset(DOM.mobileLines);
        setDashArrayAndDashOffset(DOM.hmg_mobileLines);
        hmbListener();

        animateMobileLines([...Object.values(DOM.mobileLines)]);
        // window.addEventListener('scroll', () => console.log(window.scrollY))
    }
    CenterView();


}

app();