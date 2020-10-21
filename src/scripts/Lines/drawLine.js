import getAbsolutePosition from '../commons/GetAbsolutePosition';

export default () => {
    const mainPage = document.getElementById("main-page")
    const topMainPage = getAbsolutePosition(mainPage).top;

    const mainLink = document.getElementById("main-link0");
    const aboutLink = document.getElementById("about__main-link0");

    const mainLinkPos = getAbsolutePosition(document.getElementById("main-link0"))
    const aboutLinkPos = getAbsolutePosition(document.getElementById("about__main-link0"))

    const {width: actualViewPortWidth, height: actualViewPortHeight} = svgSize(mainLink, aboutLink)

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("preserveAspectRatio", "none");
    svg.setAttribute("id", "leading-line0");
    svg.setAttribute("viewBox", `0 0 ${actualViewPortWidth} ${actualViewPortHeight}`);

    const line = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
    line.setAttribute("points", `${mainLinkPos.left},${mainLinkPos.bot - topMainPage - 7} ${aboutLinkPos.right},${aboutLinkPos.bot - topMainPage - 7} ${aboutLinkPos.left},${aboutLinkPos.bot - topMainPage - 7}`);
    line.setAttribute("stroke-miterlimit", "10");
    line.setAttribute("stroke-width", "3.2");
    line.setAttribute("stroke", "#E84E1B");
    line.setAttribute("fill", "none");

    svg.appendChild(line);
    mainPage.appendChild(svg)

    const link = document.getElementById("main-link0")
    const link2 = document.getElementById("about__main-link0")
    
    console.log(svgSize(link, link2))
}

function svgSize(link1, link2) {
    const firstContainer = getClosest(link1, 'section') || getClosest(link1, 'main');
    const secondContainer = getClosest(link2, 'section') || getClosest(link2, 'main');

    const posFirstContainer = getAbsolutePosition(firstContainer);
    const posSecondContainer = getAbsolutePosition(secondContainer);

    const width = Math.abs(posFirstContainer.left - posSecondContainer.left + firstContainer.getBoundingClientRect().width)
    const height = Math.abs(posFirstContainer.top - posSecondContainer.top + firstContainer.getBoundingClientRect().height)
    
    return {width, height}
}

function getClosest(elem, selector) {
	for ( ; elem && elem !== document; elem = elem.parentNode ) {
		if ( elem.matches( selector ) ) return elem;
	}
	return null;
};



`    
<svg preserveAspectRatio="none" id="leading-line0" viewBox="0 0 3455 870" xmlns="http://www.w3.org/2000/svg">
<polyline points="3455,870 1391,870 1391,374 0,374 0,0 " stroke-miterlimit="10" stroke-width="3.2" stroke="#E84E1B" fill="none"/>
</svg>`

