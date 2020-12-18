export default () => {
    const entries = document.querySelectorAll('.technologyName')
    const entriesArr = Array.from(entries);
    entriesArr.forEach(el => {
        el.addEventListener('click', handleClick)
    })    
}

function handleClick(e) {
    e.target.classList.toggle('technologyClicked')
}