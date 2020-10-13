import anime from 'animejs/lib/anime.es.js';

export default (element, lineOffset, duration) => {
    const lineAnimation = anime({
        targets: element.firstElementChild,
        strokeDashoffset: [anime.setDashoffset, -lineOffset],
        duration: duration,
        easing: 'easeInQuart',
        autoplay: false
   })
   return lineAnimation
}