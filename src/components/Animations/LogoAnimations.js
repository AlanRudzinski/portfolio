import anime from 'animejs/lib/anime.es.js';

function LogoAnimations(targetLogoUnderline, targetCover, inputDelay) {
    function animateLogoUnderline() {
        anime({
            targets: targetLogoUnderline,
            translateX: ['-110vw', '110vw'],
            delay: inputDelay,
            duration: 950,
            autoplay: true,
            easing: 'easeInQuint'
        })
    }
    function animateLogoCover() {
        anime({
            targets: targetCover,
            width: 0,
            delay: inputDelay + 675,
            autoplay: true,
            duration: 100,
            easing: 'linear'
        })
    }

    function animateRemoveLinesAfter() {
        anime({
            targets: targetLogoUnderline,
            width: 0,
            delay: inputDelay + 875,
            autoplay: true,
            duration: 100,
            easing: 'linear'
        })
    }

    animateLogoUnderline();
    animateLogoCover();
    animateRemoveLinesAfter();
}

export default LogoAnimations;