import anime from 'animejs/lib/anime.es.js';


function navLinkHomeContact(scrollElement) {
    const lineAnimation = anime({
        targets: `#leading-line3 polyline`,
        strokeDashoffset: [anime.setDashoffset, 0],
        duration: 3000,
        easing: 'easeInQuart'
    })
    const viewAnimation = anime({
        targets: scrollElement,
        keyframes: [
            {scrollLeft: (5*window.innerWidth)*0.7, duration: 2400},
            {scrollTop: (5*window.innerHeight)*0.7, duration: 400},
            {scrollLeft: 5*window.innerWidth, duration: 200},
        ],
        easing: 'easeInQuart'
    });
    lineAnimation.play();
    viewAnimation.play();
};

export default navLinkHomeContact;
