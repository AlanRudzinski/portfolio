import { scrambleElement } from './textScramble'

export default () => {
    const entries = document.querySelectorAll('.technologyName')
    const entriesArr = Array.from(entries);
    entriesArr.forEach(el => {
        el.addEventListener('click', handleClick)
    })    
}

function handleClick(e) {
    e.target.classList.toggle('technologyClicked')
    const text = e.target.parentElement.children[1].innerText
    console.log(text)
    // e.target.parentElement.children[1].innerHTML = ''
    scrambleElement(e.target.parentElement.children[1], text)
}