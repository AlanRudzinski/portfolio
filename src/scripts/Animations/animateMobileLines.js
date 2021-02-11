import AnimateLine from '../Animations/NavLinks/AnimateLine';

function animateLines(linesArr) {
    linesArr.forEach((element, index) => {
        console.log(element)
        AnimateLine(element, 2000, (index* 250), true, true);
    });
}

export default animateLines;