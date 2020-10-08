export default (svg, directionVertical = true) => {
    if(!(svg instanceof HTMLDocument || svg instanceof Element)) return


    const svgPolyline = svg.firstElementChild;
    const edgeLinePoints = findHighestAndLowestPoint(svgPolyline, directionVertical);
    const polylineRange = edgeLinePoints.max - edgeLinePoints.min;
    let property;
    directionVertical ? property = "height" : property = "width"
    const multiplier = svg.getBoundingClientRect()[property] / polylineRange; 
    const lastLineY = Array.from(svgPolyline.points).map(el => el.y).slice(-2);
    return ((lastLineY[0] - lastLineY[1]) * multiplier)  
}

function findHighestAndLowestPoint(polyline, y = true) {
    if(y){
        const yArray = Array.from(polyline.points).map(el => el.y);
        return {max: Math.max(...yArray), min: Math.min(...yArray)}
    }
    const xArray = Array.from(polyline.points).map(el => el.x);
    return {max: Math.max(...xArray), min: Math.min(...xArray)}
}