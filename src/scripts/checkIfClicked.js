import DOM from '../scripts/commons/DOMelements';

export default () => {
    const technologyEntries = DOM.technologiesEntries;
    const technologiesEntriesArr = Array.from(technologyEntries);
    technologiesEntriesArr.forEach(el => console.log(el.children[0].children[0].classList.contains('technologyClicked')))
}