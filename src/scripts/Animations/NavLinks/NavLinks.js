import AnimateLine from './AnimateLine';
import DOM from '../../commons/DOMelements';
import AnimateScreenFollow from './AnimateScreenFollow';

export default () => {
    DOM.navItemLinks.forEach(el => el.addEventListener('click', (e) => animateLeadingLine(e.target.id)));
}


function animateLeadingLine(target) {
    if (target[target.length-1] === '0') {
  //      NavLinkHomeAboutMe(scrollElement);
    } else if(target[target.length-1] === '2') {
//        navLinkHomeTechnologies(scrollElement);
    } else if (target[target.length-1] === '3') {
        AnimateLine(DOM.svgs.homeContactLine, 3800, 5000).play();
        AnimateScreenFollow(DOM.svgs.homeContactLine, 5000).play();
    }
}

