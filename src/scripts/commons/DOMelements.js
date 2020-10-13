export default  {
    body: document.querySelector('body'),
    navItemLinks: document.querySelectorAll('.navigation__list__item-link'),
    svgs: {
        homeAboutLine: document.getElementById("leading-line0"),
        homeProjectLine: document.getElementById("leading-line1"),
        homeTechnologyLine: document.getElementById("leading-line2"),
        homeContactLine: document.getElementById("leading-line3"),
    },
    pages: {
        contactPage: document.getElementById("contact-page"),
        mainPage: document.getElementById("main-page"),
        aboutPage: document.getElementById("about-page"),
        projectPage: document.getElementById("project-page"),
        technologyPage: document.getElementById("technology-page"),
    },
}