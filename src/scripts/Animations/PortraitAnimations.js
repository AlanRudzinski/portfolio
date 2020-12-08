import DOM from '../commons/DOMelements'

import AnimateLine from './NavLinks/AnimateLine';

async function PortraitAnimations() {
    //reset lines inside
    const lines = resetDasharrayAndOffset(DOM.portrait.portrait.childNodes);

    // reset leading lines
    const leadingLines = Object.values(DOM.portrait.leadingLines).map(el => el.childNodes[1]);
    resetDasharrayAndOffset(leadingLines)


    //animate
    lines.forEach(el => {
        const animation = AnimateLine(el, 1300, 5900, false);
        animation.play();
    })

    const entryLine = AnimateLine(DOM.portrait.leadingLines.leftTopLine, 3000, 3400, false)
    entryLine.play();

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