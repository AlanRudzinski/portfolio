import anime from 'animejs/lib/anime.es.js';


function NavItemAnimations(line, moveDirection) {
    const NavCrosslines = anime({
        targets: line,
        keyframes: [
            {bottom: ['-120vh', '-69vh'],
             height: ['70vh', '70vh']},
            {bottom: ['-69vh', '1vh'],
             height: ['70vh', 0]}
        ],
        duration: 400,
        delay: 200,
        endDelay: 150,
        autoplay: false,
        easing: 'easeOutQuad',
        direction: moveDirection
    })
    NavCrosslines.play();
}

const navItem = document.querySelectorAll('.navigation__list__item-link');
navItem.forEach((el, i) => {
    el.addEventListener('mouseover', () => NavItemAnimations(`.l${i}`, 'normal'));
});

export default NavItemAnimations;