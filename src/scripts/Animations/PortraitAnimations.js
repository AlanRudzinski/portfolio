import DOM from '../commons/DOMelements'

import AnimateLine from './NavLinks/AnimateLine';

import anime from 'animejs';

async function PortraitAnimations() {
    // reset cover
    DOM.portrait.descriptionCover.style.width = '100%'

    //reset lines inside
    const lines = resetDasharrayAndOffset(DOM.portrait.portrait.childNodes);

    // reset leading lines
    const leadingLines = Object.values(DOM.portrait.leadingLines).map(el => el.childNodes[1]);
    resetDasharrayAndOffset(leadingLines)

    //animate
    if(window.innerWidth > 600) {
        const entryLine = AnimateLine(DOM.portrait.leadingLines.leftLine, 2200, 2500)
        entryLine.play();
    
        lines.forEach(el => {
            const animation = AnimateLine(el, 600, 4250, false);
            animation.play();
        })
    
        const exitLines = Object.values(DOM.portrait.leadingLines).filter(el => el.id !== 'portrait__line-left')
        exitLines.forEach(el => {
            const animation = AnimateLine(el, 500, 4900, false);
            animation.play();
        })
    }

    animateDescriptionCover(300, 4000)

}

function resetDasharrayAndOffset(arr) {
    let lines = []
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] instanceof Element) lines.push(arr[index]);   
    }
    lines.forEach(el => {
        el.style.strokeDasharray = el.getTotalLength();
        el.style.strokeDashoffset = el.getTotalLength();
    })
    return lines;
}

function animateDescriptionCover(duration, delay) {
    anime({
        targets: DOM.portrait.descriptionCover,
        width: 0,
        delay: delay,
        autoplay: true,
        duration: duration,
        easing: 'linear'
    })
}

export default PortraitAnimations;