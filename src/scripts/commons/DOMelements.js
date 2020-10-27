export default  {
    body: document.querySelector('body'),
    navItemLinks: document.querySelectorAll('.navigation__list__item-link'),
    svgs: {
        homeAboutLine: document.getElementById("leading-line0"),
        homeProjectLine: document.getElementById("leading-line1"),
        homeTechnologyLine: document.getElementById("leading-line2"),
        homeContactLine: document.getElementById("leading-line3"),
        contactAboutLine: document.getElementById("leading-line-contact0"),
        contactProjectLine: document.getElementById("leading-line-contact1"),
        contactTechnologiesLine: document.getElementById("leading-line-contact2"),
        contactHomeLine: document.getElementById("leading-line-contact4"),
    },
    pages: {
        contactPage: document.getElementById("contact-page"),
        mainPage: document.getElementById("main-page"),
        aboutPage: document.getElementById("about-page"),
        projectPage: document.getElementById("project-page"),
        technologyPage: document.getElementById("technology-page"),
    },
    links: {
        aboutAboutLink: document.getElementById("about__main-link0"),
        projectProjectLink: document.getElementById("project__main-link1"),
        technologiesTechnologiesLink: document.getElementById("technology__main-link2"),
        homeContactLink: document.getElementById("main-link3"),
    }
}