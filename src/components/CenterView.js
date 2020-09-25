function CenterView() {
    window.onload = () => {
        const scrollElement = window.document.scrollingElement || window.document.body || window.document.documentElement;
        scrollElement.scrollLeft = window.innerWidth*2
        scrollElement.scrollTop = window.innerHeight*2
    }

}
export default CenterView;