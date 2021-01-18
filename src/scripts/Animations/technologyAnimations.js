import { scrambleElement } from '../textScramble'
import { technologySet } from '../commons/technologyConst'

export default () => {
    const entries = document.querySelectorAll('.technologyName')
    const entriesArr = Array.from(entries);
    entriesArr.forEach(el => {
        el.addEventListener('click', handleClick)
    })    
}

function handleClick(e) {
    const tech = e.target.parentElement.children[0].innerText
    if(e.target.classList.contains('technologyClicked')) {
        scrambleElement(e.target.parentElement.children[1], '')
    } else {
        scrambleElement(e.target.parentElement.children[1], technologySet[tech])
    }
    e.target.classList.toggle('technologyClicked')
}