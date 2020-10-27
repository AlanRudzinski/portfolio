import DOMelements from "../commons/DOMelements";
import GetAbsolutePosition from "../commons/GetAbsolutePosition";
import DOM from '../commons/DOMelements'

export default () => {
    correctHorizontal(DOM.svgs.contactAboutLine, DOM.links.aboutAboutLink);
    correctHorizontal(DOM.svgs.contactProjectLine, DOM.links.projectProjectLink);
    correctHorizontal(DOM.svgs.contactTechnologiesLine, DOM.links.technologiesTechnologiesLink);
    correctHorizontal(DOM.svgs.contactHomeLine, DOM.links.homeContactLink);


    correctVertical(DOM.svgs.contactProjectLine, DOM.links.projectProjectLink);
    correctVertical(DOM.svgs.contactTechnologiesLine, DOM.links.technologiesTechnologiesLink);
    correctVertical(DOM.svgs.contactHomeLine, DOM.links.homeContactLink);

}

function correctHorizontal(line, link){
    let moveValue = GetAbsolutePosition(link).left - GetAbsolutePosition(line).left;
    const lineLastPoints = line.firstElementChild.points;
    const points = {
        firstPoint: lineLastPoints[lineLastPoints.length-1],
        secondPoint: lineLastPoints[lineLastPoints.length-2]
    }

    if (moveValue > 0) {
        points.firstPoint.x += moveValue;
        points.secondPoint.x += moveValue;
    } else {
        moveValue = -moveValue;
        line.style.width = `${line.getBoundingClientRect().width + moveValue}px`
        let viewBoxArr = line.getAttribute("viewBox").split(" ")
        viewBoxArr[2] = parseInt(viewBoxArr[2]) + moveValue
        viewBoxArr = viewBoxArr.join(" ")
        line.setAttribute("viewBox", viewBoxArr)
    } 
}

function correctVertical(line, link) {
    const lineLastPoints = line.firstElementChild.points;
    const distancePoint = lineLastPoints[lineLastPoints.length-2].y
    let moveValue = distancePoint + GetAbsolutePosition(line).top - GetAbsolutePosition(link).bot;


    const points = {
        firstPoint: lineLastPoints[lineLastPoints.length-2],
        secondPoint: lineLastPoints[lineLastPoints.length-3]
    }

    if(moveValue > 0) {
        points.firstPoint.y -= moveValue;
        points.secondPoint.y -= moveValue;
    } else {
        moveValue = -moveValue;
        console.log(moveValue)
        line.style.height = `${line.getBoundingClientRect().height + moveValue}px`
        let viewBoxArr = line.getAttribute("viewBox").split(" ")
        viewBoxArr[3] = parseInt(viewBoxArr[3]) + moveValue
        viewBoxArr = viewBoxArr.join(" ")
        points.firstPoint.y += moveValue;
        points.secondPoint.y += moveValue;

        line.setAttribute("viewBox", viewBoxArr)  
    }
}