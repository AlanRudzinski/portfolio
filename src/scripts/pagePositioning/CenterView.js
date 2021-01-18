import DOM from '../commons/DOMelements'

export default () => {
    window.onload = () => {
        window.location.hash = '#main';
        const mainPage = DOM.pages.mainPage
        mainPage.scrollIntoView();
    }

}
