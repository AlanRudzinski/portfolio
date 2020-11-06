import GetAbsolutePosition from "../commons/GetAbsolutePosition";
import DOM from '../commons/DOMelements'

export default () => {
    // contact
    correctPosition(DOM.svgs.contactAboutLine, DOM.links.aboutAboutLink);
    correctPosition(DOM.svgs.contactProjectLine, DOM.links.projectProjectLink);
    correctPosition(DOM.svgs.contactTechnologiesLine, DOM.links.technologiesTechnologiesLink);
    correctPosition(DOM.svgs.contactHomeLine, DOM.links.homeContactLink);

    // // tech
    correctPosition(DOM.svgs.technologyAboutLine, DOM.links.aboutAboutLink);
    correctPosition(DOM.svgs.technologyProjectLine, DOM.links.projectProjectLink);
    correctPosition(DOM.svgs.technologyContactLine, DOM.links.contactContactLink);
    correctPosition(DOM.svgs.technologyHomeLine, DOM.links.homeTechnologyLink);

    // // about
    correctPosition(DOM.svgs.aboutContactLine, DOM.links.contactContactLink);
    correctPosition(DOM.svgs.aboutHomeLine, DOM.links.homeAboutLink);
    correctPosition(DOM.svgs.aboutProjectLine, DOM.links.projectProjectLink);
    correctPosition(DOM.svgs.aboutTechnologiesLine, DOM.links.technologiesTechnologiesLink);

    // // project
    correctPosition(DOM.svgs.projectAboutLine, DOM.links.aboutAboutLink);
    correctPosition(DOM.svgs.projectContactLine, DOM.links.contactContactLink);
    correctPosition(DOM.svgs.projectHomeLine, DOM.links.homeProjectLink);
    correctPosition(DOM.svgs.projectTechnologiesLine, DOM.links.technologiesTechnologiesLink)
}

function correctPosition(line, link) {
    correctHorizontal(line, link);
    correctVertical(line, link);
}

function correctHorizontal(line, link){
    let moveValue = GetAbsolutePosition(link).left - GetAbsolutePosition(line).left;
    const points = {
        firstPoint: getPoints(line, 1),
        secondPoint: getPoints(line, 2)
    }
    if (moveValue > 0) {
        moveValue -= points.firstPoint.x;
        points.firstPoint.x += moveValue;
        points.secondPoint.x += moveValue;
        if(points.firstPoint.x > line.getAttribute("viewBox").split(" ")[2]) {
            const linkWidth = link.getBoundingClientRect().width
            modifyWidth(line, moveValue + linkWidth)
            points.firstPoint.x += linkWidth;
            points.secondPoint.x += linkWidth;
        } else {
            getPoints(line, line.firstElementChild.points.length).x += moveValue;
        }
    } else {
        modifyWidth(line, -moveValue);
        getPoints(line, line.firstElementChild.points.length).x -= moveValue;
    } 
}

function correctVertical(line, link) {
    const distancePoint = getPoints(line, 2).y
    let moveValue = distancePoint + GetAbsolutePosition(line).top - GetAbsolutePosition(link).bot + 5;
    const points = {
        firstPoint: getPoints(line, 2),
        secondPoint: getPoints(line, 3)
    }
    if(moveValue > 0) {
        points.firstPoint.y -= moveValue;
        points.secondPoint.y -= moveValue;
    } else {
        if(points.firstPoint.y !== 0 && points.secondPoint.y !== 0) modifyHeight(line, -moveValue);
        points.firstPoint.y += -moveValue;
        points.secondPoint.y += -moveValue;
    }   
}


function getPoints(line, point = 1) {
    return line.firstElementChild.points[line.firstElementChild.points.length - point];
}

function modifyHeight(element, value){
    element.style.height = `${element.getBoundingClientRect().height + value}px`;
    let viewBoxArr = element.getAttribute("viewBox").split(" ");
    viewBoxArr[3] = parseInt(viewBoxArr[3]) + value;
    viewBoxArr = viewBoxArr.join(" ");
    element.setAttribute("viewBox", viewBoxArr);
}

function modifyWidth(element, value) {
    element.style.width = `${element.getBoundingClientRect().width + value}px`
    let viewBoxArr = element.getAttribute("viewBox").split(" ")
    viewBoxArr[2] = parseInt(viewBoxArr[2]) + value
    viewBoxArr = viewBoxArr.join(" ")
    element.setAttribute("viewBox", viewBoxArr)
}