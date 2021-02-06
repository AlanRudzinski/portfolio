import pagePosition from './pagePosition';
import DOM from '../commons/DOMelements';

export default () => {
    if(window.innerWidth >= 600) {
        pagePosition(DOM.svgs.homeAboutLine, DOM.pages.aboutPage, document.getElementById("about__main-link0"), true);
        pagePosition(DOM.svgs.homeProjectLine, DOM.pages.projectPage, document.getElementById("project__main-link1"), true, true);
        pagePosition(DOM.svgs.homeTechnologyLine, DOM.pages.technologyPage, document.getElementById("technology__main-link2"));
        pagePosition(DOM.svgs.homeContactLine, DOM.pages.contactPage, document.getElementById("contact__main-link3"));    
    }
}