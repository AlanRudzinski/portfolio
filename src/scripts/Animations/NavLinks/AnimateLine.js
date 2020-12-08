import anime from 'animejs/lib/anime.es.js';

export default (element, duration = 4000, delay = 0, reset = true) => {
    if(element.tagName === 'svg') element = element.firstElementChild;
    const strokeDashoffset = window.getComputedStyle(element).strokeDasharray.slice(0, -2)
    
    const lineAnimation = anime({
        targets: element,
        strokeDashoffset: [anime.setDashoffset, (reset ? -strokeDashoffset : 0)],
        duration: duration,
        delay: delay,
        easing: 'easeInQuart',
        autoplay: false,
   })
   
   return lineAnimation
}