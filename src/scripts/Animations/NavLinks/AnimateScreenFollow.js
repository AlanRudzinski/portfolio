import anime from 'animejs/lib/anime.es.js';

export default (element, duration = 3000, breakpoint) => {
    const scrollElement = window.document.scrollingElement || window.document.body || window.document.documentElement;
    const top = element.getBoundingClientRect().top;
    const left = element.getBoundingClientRect().left;
    let frames = [];
    // if(breakpoint) {
    //     const points = breakpoint.element.firstElementChild.points;
    //     const scrollDirection = (points[breakpoint.break].x - points[breakpoint.break-1].x) === 0 ? 'y':'x';
    //     if(scrollDirection === 'x'){
    //         frames.push({scrollLeft:(window.scrollX + points[breakpoint.break].x - points[breakpoint.break-1].x)})
    //     } else {
    //         frames.push({scrollTop:(window.scrollY + points[breakpoint.break].y - points[breakpoint.break-1].y)})

    //     }
    // }
    frames.push({
            scrollTop: (top + window.scrollY),
            scrollLeft: (left + window.scrollX),})
    viewAnimation = anime({
        targets: scrollElement,
        keyframes: frames,
        easing: 'easeInQuart',
        duration: duration,
    })

    return viewAnimation
}