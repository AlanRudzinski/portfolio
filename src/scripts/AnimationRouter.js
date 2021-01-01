import AnimateScreenFollow from './Animations/NavLinks/AnimateScreenFollow'
import DOM from './commons/DOMelements'

import PortraitAnimations from './Animations/PortraitAnimations'
import { scrambleRandomElement } from './textScramble'

export default () => {
    function onRouteChanged(e) {
        const currentHash = e.oldURL.slice(e.oldURL.lastIndexOf("#"))
        const nextHashLocation = document.getElementById((window.location.hash + '-page').slice(1));
        if(nextHashLocation === DOM.pages.aboutPage) {
            PortraitAnimations();
        }
        if(nextHashLocation === DOM.pages.technologyPage) {
            const glitch = () => {
                scrambleRandomElement(DOM.technologiesList)
                if(window.location.hash === '#technology') {
                    setTimeout(glitch, 3000)
                }
            }
            glitch(nextHashLocation);
        }
        AnimateScreenFollow(nextHashLocation, currentHash)
    }

    window.addEventListener('hashchange', e => onRouteChanged(e));
}   