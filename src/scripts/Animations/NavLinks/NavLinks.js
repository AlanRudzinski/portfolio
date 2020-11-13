import AnimateLine from './AnimateLine';
import DOM from '../../commons/DOMelements';

export default () => {
    DOM.navItemLinks.forEach(el => el.addEventListener('click', (e) => animateLeadingLine(e.target)));
}


function animateLeadingLine(target) {
    AnimateLine(
        getLinksSVG(target), 
        window.getComputedStyle(getLinksSVG(target).firstElementChild).strokeDashoffset.slice(0, -2)
        ).play()
}

function getLinksSVG(link) {
    let siblingElement = link.nextElementSibling
    while(siblingElement !== null && siblingElement.tagName !== "svg") {
        siblingElement = siblingElement.nextElementSibling;
    }
    return siblingElement
}

// eventlisstener do kazdego linka na stronie

// -> screen follow