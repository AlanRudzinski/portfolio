import anime from 'animejs/lib/anime.es.js';

export default (element, duration = 4000) => {
    const strokeDashoffset = window.getComputedStyle(element.firstElementChild).strokeDasharray.slice(0, -2)
    const lineAnimation = anime({
        targets: element.firstElementChild,
        strokeDashoffset: [anime.setDashoffset, -strokeDashoffset],
        duration: duration,
        easing: 'easeInQuart',
        autoplay: false,
   })
   
   return lineAnimation
}