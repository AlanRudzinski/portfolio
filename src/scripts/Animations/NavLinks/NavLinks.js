import AnimateLine from './AnimateLine';
import DOM from '../../commons/DOMelements';

export default () => {
    DOM.allNavLinks.forEach(el => el.addEventListener('click', (e) => animateLeadingLine(e.target)));
}

function animateLeadingLine(target) {
    const animation = AnimateLine(
        getLinksSVG(target), 
        );
    animation.play()
}

function getLinksSVG(link) {
    let siblingElement = link.nextElementSibling
    while(siblingElement !== null && siblingElement.tagName !== "svg") {
        siblingElement = siblingElement.nextElementSibling;
    }
    return siblingElement
}
