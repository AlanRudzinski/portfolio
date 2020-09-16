import anime from 'animejs/lib/anime.es.js';


function NavItemAnimations(line, moveDirection) {
    const NavAnimations = anime({
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
    NavAnimations.play();
}

const navItem = document.querySelectorAll('.navigation__list__item');
navItem.forEach((el, i) => {
    el.addEventListener('mouseover', () => NavItemAnimations(`.l${i}`, 'normal'));
    // MouseOut
    // el.addEventListener('mouseout', () => NavItemAnimations(`.l${i}`, 'reverse'));
});

export default NavItemAnimations;