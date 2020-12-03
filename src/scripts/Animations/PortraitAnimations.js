import DOM from '../commons/DOMelements'

import AnimateLine from './NavLinks/AnimateLine';

function PortraitAnimations() {
    //reset lines inside
    const allChilds = DOM.portrait.childNodes[1].childNodes;
    const lines = resetDasharrayAndOffset(allChilds);

    //animate
    lines.forEach(el => {
        const animation = AnimateLine(el, 1300, 3900, false);
        console.log(animation)
        animation.play();
    })

    // function AnimateInsideLines() {
    //     anime({
    //         target: DOM.portrait,

    //     })
    // }

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
export default PortraitAnimations;