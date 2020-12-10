

function setDashArrayAndDashOffset(lines) {
    const linesArr = Object.values(lines);
    linesArr.forEach(el => {
        const lng = el.firstElementChild.getTotalLength();
        console.log(lng, el.firstElementChild)
        el.style.strokeDasharray = lng;
        el.style.strokeDashoffset = lng;
    })
}

export default setDashArrayAndDashOffset;