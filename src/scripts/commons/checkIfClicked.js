export default (arr) => {
    for (let index = 0; index < arr.length; index++) {
        const el = arr[index];
        if(el.children[0].children[0].classList.contains('technologyClicked') === true) {
            return true;
        }
    };
    return false;
};