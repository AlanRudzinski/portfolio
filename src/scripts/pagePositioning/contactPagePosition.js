import DOM from '../commons/DOMelements';
import GetAbsolutePosition from '../commons/GetAbsolutePosition'
import GetLengthLastLine from '../commons/GetLengthLastLine'

export default () => {
    const line = DOM.svgs.homeContactLine;
    const lineRect = line.getBoundingClientRect();
    const contactLink = document.getElementById("contact__main-link3");
    let elementTransform = DOM.pages.contactPage;

    const moveTop =
    (GetAbsolutePosition(line).top - GetAbsolutePosition(contactLink).top + GetLengthLastLine(line) - contactLink.getBoundingClientRect().height + 5)
    const moveLeft =
    (GetAbsolutePosition(line).left - GetAbsolutePosition(contactLink).left + lineRect.width - contactLink.getBoundingClientRect().width)
    elementTransform.style.top = `${moveTop}px`;
    elementTransform.style.left  = `${moveLeft}px`;
};