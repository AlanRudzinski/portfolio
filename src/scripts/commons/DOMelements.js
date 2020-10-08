export default  {
    body: document.querySelector('body'),
    navItemLinks: document.querySelectorAll('.navigation__list__item-link'),
    svgs: {
        homeContactLine: document.getElementById("leading-line3"),
        homeAboutLine: document.getElementsByClassName("svg-container")
    },
    pages: {
        contactPage: document.getElementById("contact-page"),
        mainPage: document.getElementById("main-page"),
    },
}