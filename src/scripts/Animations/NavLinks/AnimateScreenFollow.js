import anime from 'animejs/lib/anime.es.js';

export default (element) => {
    const scrollElement = window.document.scrollingElement || window.document.body || window.document.documentElement;
    const top = element.getBoundingClientRect().top;
    const left = element.getBoundingClientRect().left;

    const viewAnimation = anime({
        targets: scrollElement,
        scrollTop: (top + window.scrollY),
        scrollLeft: (left + window.scrollX),
        easing: 'easeInQuart',
        duration: 3800,
    });
    // return viewAnimation
}