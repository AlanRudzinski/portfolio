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

// function navLinkHomeContact(scrollElement, directionNormal = true) {
//     const line = DOM.svgs.homeContactLine[0].getBoundingClientRect()
//     const lineAnimation = anime({
//         targets: `#leading-line3 polyline`,
//         strokeDashoffset: [anime.setDashoffset, 0],
//         duration: 3000,
//         easing: 'easeInQuart'
//     })
//     const viewAnimation = anime({
//         targets: scrollElement,
//         keyframes: [
//             {scrollLeft: (line.right/1.5 + window.pageXOffset), duration: 2400},
//             {scrollTop: (line.bottom + window.pageYOffset - 50), duration: 400},
//             {scrollLeft: (line.right + window.pageXOffset), duration: 200},
//         ],
//         easing: 'easeInQuart'
//     });
//     if(directionNormal){
//         lineAnimation.play();
//         viewAnimation.play();
//     } else {
//         lineAnimation.seek(3000);
//         viewAnimation.seek(3000);

//         lineAnimation.reverse();
//         viewAnimation.reverse();

//         lineAnimation.play();
//         viewAnimation.play();
//     }
// };

// export default navLinkHomeContact;
