import anime from 'animejs/lib/anime.es.js';


function navLinkHomeTechnologies(scrollElement) {
    const lineAnimation = anime({
        targets: `#leading-line2 polyline`,
        strokeDashoffset: [anime.setDashoffset, 0],
        duration: 3000,
        easing: 'easeInQuart'
    })
    const viewAnimation = anime({
        targets: scrollElement,
        keyframes: [
            {scrollTop: (5*window.innerHeight) * 0.65, duration: 2300},
            {scrollLeft: (5*window.innerWidth) * 0.1, duration: 500},
            {scrollTop: (5*window.innerHeight), duration: 500},
        ],
        easing: 'easeInQuart'
    });
    lineAnimation.play();
    viewAnimation.play();
};

export default navLinkHomeTechnologies;