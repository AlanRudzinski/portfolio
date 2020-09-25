import anime from 'animejs/lib/anime.es.js';


function animateLeadingLine(target) {
    const scrollElement = window.document.scrollingElement || window.document.body || window.document.documentElement;
    if (target[target.length-1] === '0') {
        anime({
            targets: `#leading-line${target[target.length-1]} polyline`,
            strokeDashoffset: [anime.setDashoffset, 0],
            duration: 3000,
            easing: 'easeInQuart'
        })
        anime({
            targets: scrollElement,
            keyframes: [
                {scrollLeft: (5*window.innerWidth/5), duration: 2000},
                {scrollTop: (5*window.innerHeight)/3.3, duration: 500, },
                {scrollLeft: '0', duration: 500},
            ],
            easing: 'easeInQuart'
        });
    }
    if(target[target.length-1] === '3') {
        anime({
            targets: `#leading-line${target[target.length-1]} polyline`,
            strokeDashoffset: [anime.setDashoffset, 0],
            duration: 3000,
            easing: 'easeInQuart'
        })
        anime({
            targets: scrollElement,
            keyframes: [
                {scrollLeft: (5*window.innerWidth)*0.7, duration: 2400},
                {scrollTop: (5*window.innerHeight)*0.7, duration: 400},
                {scrollLeft: 5*window.innerWidth, duration: 200},
            ],
            easing: 'easeInQuart'
        });
    }
}

const navItem = document.querySelectorAll('.navigation__list__item-link');
navItem.forEach(el => el.addEventListener('click', (e) => animateLeadingLine(e.target.id)));

export default animateLeadingLine;