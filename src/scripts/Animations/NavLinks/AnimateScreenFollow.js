import anime from 'animejs/lib/anime.es.js';

export default (element, currentHash, duration = 2900) => {
    const scrollElement = window.document.scrollingElement || window.document.body || window.document.documentElement;
    const top = element.getBoundingClientRect().top;
    const left = element.getBoundingClientRect().left;
    let frames = [];

    if(currentHash === '#main' && element.id === "technology-page") frames.push({ scrollLeft: (left + window.scrollX)})

    if(currentHash === '#about') {
        if(element.id === "project-page") console.log('project')
        if(element.id === "technology-page") console.log('technology')
        if(element.id === "contact-page") console.log('contact')
    }
    
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