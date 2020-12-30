import checkIfClicked from './checkIfClicked';
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
    const tech = e.target.parentElement.children[0].innerText
    checkIfClicked();
    scrambleElement(e.target.parentElement.children[1], technologySet[tech])
}

const technologySet = {
    HTML: "Projects made with this technology:<ul><li><a href='http://akademiapromyk.pl' >www.akademiapromyk.pl</a></li><li><a href='http://alanrudzinski.pl'>www.alanrudzinski.pl</a></li></ul>",
    CSS: "Projects made with this technology:<ul><li><a href='http://akademiapromyk.pl' >www.akademiapromyk.pl</a></li><li><a href='http://alanrudzinski.pl'>www.alanrudzinski.pl</a></li></ul>",
    Javascript:"Projects made with this technology:<ul><li><a href='http://akademiapromyk.pl' >www.akademiapromyk.pl</a></li><li><a href='http://alanrudzinski.pl' >www.alanrudzinski.pl</a></li></ul>",
    ReactJS: "Projects made with this technology:<ul><li><a href='http://akademiapromyk.pl' >www.akademiapromyk.pl</a></li></ul>",
    Redux: "No projects are ready with this technology yet",
    Styled: "Projects made with this technology:<ul><li><a href='http://akademiapromyk.pl' >www.akademiapromyk.pl</a></li></ul>",
    GatsbyJS: "Projects made with this technology:<ul><li><a href='http://akademiapromyk.pl'>www.akademiapromyk.pl</a></li></ul>",
    Python: "No projects made with this technology yet",
    Django: "No projects made with this technology yet",
    GraphQL: "Projects made with this technology:<ul><li><a href='http://akademiapromyk.pl' >www.akademiapromyk.pl</a></li></ul>",
}