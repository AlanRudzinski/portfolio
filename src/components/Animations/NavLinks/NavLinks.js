import NavLinkHomeAboutMe from './NavLinkHomeAboutMe';
import navLinkHomeContact from './NavLinkHomeContact';
import navLinkHomeTechnologies from './NavLinkHomeTechnologies';

function animateLeadingLine(target) {
    const scrollElement = window.document.scrollingElement || window.document.body || window.document.documentElement;
    if (target[target.length-1] === '0') {
        NavLinkHomeAboutMe(scrollElement);
    } else if(target[target.length-1] === '2') {
        navLinkHomeTechnologies(scrollElement);
    } else if (target[target.length-1] === '3') {
        navLinkHomeContact(scrollElement);
    }
}

const navItem = document.querySelectorAll('.navigation__list__item-link');
navItem.forEach(el => el.addEventListener('click', (e) => animateLeadingLine(e.target.id)));

export default animateLeadingLine;