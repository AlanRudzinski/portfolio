import anime from 'animejs/lib/anime.es.js';

export default (element, currentHash, duration = 2900) => {
    const scrollElement = window.document.scrollingElement || window.document.body || window.document.documentElement;
    const top = element.getBoundingClientRect().top;
    const left = element.getBoundingClientRect().left;
    let frames = [];

    if(currentHash === '#main' && element.id === "technology-page") frames.push({ scrollLeft: (left + window.scrollX)})

    if(currentHash === '#about' && element.id === "project-page") console.log(currentHash)
    
    if(currentHash === '#about')

    frames.push({
            scrollTop: (top + window.scrollY),
            scrollLeft: (left + window.scrollX),})
    const viewAnimation = anime({
        targets: scrollElement,
        keyframes: frames,
        easing: 'easeInQuart',
        duration: duration,
    })

    return viewAnimation
}