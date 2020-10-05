import anime from 'animejs/lib/anime.es.js';

export default (element, duration = 3000, ignoreLastPoint = true) => {
// todo: % of element
// todo: behaviour change on last points

    const scrollElement = window.document.scrollingElement || window.document.body || window.document.documentElement;
    const pointsArray = Array.from(element.firstElementChild.points).map(el =>  {
       return {
            x: el.x,
            y: el.y
       }
    })

    let highestX = -Infinity;
    let highestY = -Infinity;
    for(let i = 0; i < pointsArray.length; i++) {
        if(pointsArray[i].x > highestX) highestX = pointsArray[i].x
        if(pointsArray[i].y > highestY) highestY = pointsArray[i].y
    }
    const precentageX = element.firstElementChild.getBoundingClientRect().width / highestX;
    const precentageY = element.firstElementChild.getBoundingClientRect().height / highestY;


    let essentialPointsArray = pointsArray.slice(1);
    ignoreLastPoint ? essentialPointsArray = essentialPointsArray.slice(0, -1) : null;
    
    const moveDuration = duration/essentialPointsArray.length;
    console.log(moveDuration)
    let movingPoints = essentialPointsArray.map((el, idx, arr) => {
        let move;
        if (idx === 0) {
            move = moveDuration * 1.5
        } else if (idx === (arr.length-1)) {
            move = moveDuration * .5
        }
        return {
            scrollLeft: window.scrollX + (el.x - pointsArray[0].x) * precentageX,

            scrollTop: window.scrollY + (el.y - pointsArray[0].y) * precentageY,

            duration: move,
        }
    })
    movingPoints[movingPoints.length-2].scrollTop += window.innerHeight/1.65;
    movingPoints[movingPoints.length-1].scrollTop += window.innerHeight/1.65;
    movingPoints[movingPoints.length-1].scrollLeft += window.innerWidth/5;

    const viewAnimation = anime({
        targets: scrollElement,
        keyframes: movingPoints,
        easing: 'easeInQuart'
    });
    return viewAnimation
}