import anime from 'animejs/lib/anime.es.js';


function navLinkHomeAboutMe(scrollElement) {
    const lineAnimation = anime({
        targets: `#leading-line0 polyline`,
        strokeDashoffset: [anime.setDashoffset, 0],
        duration: 3000,
        easing: 'easeInQuart'
    })
    const viewAnimation = anime({
        targets: scrollElement,
        keyframes: [
            {scrollLeft: (5*window.innerWidth/5), duration: 2000},
            {scrollTop: (5*window.innerHeight)/3.3, duration: 500, },
            {scrollLeft: '0', duration: 500},
        ],
        easing: 'easeInQuart'
    });
    lineAnimation.play();
    viewAnimation.play();
};

export default navLinkHomeAboutMe;