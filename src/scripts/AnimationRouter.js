import AnimateScreenFollow from './Animations/NavLinks/AnimateScreenFollow'
import DOM from './commons/DOMelements'

import PortraitAnimations from './Animations/PortraitAnimations'
import { scrambleAllElements, scrambleRandomElement } from './textScramble'
import { delay } from './commons/delay'


export default () => {
    function onRouteChanged(e) {
        const currentHash = e.oldURL.slice(e.oldURL.lastIndexOf("#"))
        const nextHashLocation = document.getElementById((window.location.hash + '-page').slice(1));
        if(nextHashLocation === DOM.pages.aboutPage) {
            PortraitAnimations();
        }
        if(nextHashLocation === DOM.pages.technologyPage) {
            delay(5500).then(scrambleAllElements)
            // setTimeout(scrambleAllElements, 5500).then(glitch(nextHashLocation))

        }
        AnimateScreenFollow(nextHashLocation, currentHash)
    }

    window.addEventListener('hashchange', e => onRouteChanged(e));
}   