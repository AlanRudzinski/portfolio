import DOMelements from "../commons/DOMelements";
import GetAbsolutePosition from "../commons/GetAbsolutePosition";
import DOM from '../commons/DOMelements'

export default () => {
    // const link1 = document.getElementById("about__main-link0");
    // const link2 = document.getElementById("contact__main-link0");
    // const line = document.getElementById("leading-line-contact0");
    // console.log(line.getBoundingClientRect().width)
    // console.log(GetAbsolutePosition(link2).left - GetAbsolutePosition(link1).left)

    // console.log(document.body.getBoundingClientRect().width)
    // console.log((line.getBoundingClientRect().width * 100) / document.body.getBoundingClientRect().width)

// 9093 100%
// 6358 x%
    correctHorizontal(DOM.svgs.contactAboutLine, DOM.links.aboutAboutLink);
    correctHorizontal(DOM.svgs.contactProjectLine, DOM.links.projectProjectLink);
    correctHorizontal(DOM.svgs.contactTechnologiesLine, DOM.links.technologiesTechnologiesLink);
    correctHorizontal(DOM.svgs.contactHomeLine, DOM.links.homeContactLink);
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
