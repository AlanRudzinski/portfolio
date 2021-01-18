import checkIfClicked from "./commons/checkIfClicked";
import { delay } from "./commons/delay";
import DOM from './commons/DOMelements';
import { technologySet } from "./commons/technologyConst";

export function scrambleAllElements() {
  const arr = Array.from(DOM.technologiesEntries)
  const titles = Object.keys(technologySet);
  arr.forEach((element, idx) => {
    const scrambleElement = new TextScramble(element.children[0].children[0])
    scrambleElement.setText(titles[idx])
  });
  delay(1000).then(glitch())
}

function glitch() {
  scrambleRandomElement(DOM.technologiesList)
  if(window.location.hash === '#technology') {
      setTimeout(glitch, 1500)
  }
}

export function scrambleElement(el, text) {
  const fx = new TextScramble(el);
  fx.setText(text);
}

export function scrambleRandomElement(el){
  if(checkIfClicked(Array.from(DOM.technologiesEntries))) return;
  
  const arr = Array.from(el.children).filter(el => el.classList.contains('technologyEntry'));
  const randomElIdx = Math.floor(Math.random() * arr.length)
  const randomEl = arr[randomElIdx]
  const fx = new TextScramble(randomEl.children[0].children[0])
  fx.setText(Object.keys(technologySet)[randomElIdx]);
}

class TextScramble {
  constructor(el) {
    this.el = el
    this.chars = '!<>-_\\/[]{}—=+*^?#________'
    this.update = this.update.bind(this)
  }
  setText(newText) {
    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise((resolve) => this.resolve = resolve)
    this.queue = []
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({ from, to, start, end })
    }
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }
  update() {
    let output = ''
    let complete = 0
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.15) {
          char = this.randomChar()
          this.queue[i].char = char
        }
        output += `<span style="font-size:10px;opacity:.7;">${char}</span>`
      } else {
        output += from
      }
    }
    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
  }
}





// export function textScramble(text, el) { 
//   const q = makeQueue(text) 
//   requestAnimationFrame(() => getScrambledOutputIntoElement(q, el));
// }

// function getScrambledOutputIntoElement(queue, el, frame) {
//   let output = '';
//   let complete = 0;
//   for (let index = 0, length = queue.length; index < length; index++) {
//     const { letter, start, end, char } = queue[index];
//     if(frame > end) {
//       complete++;
//       output += letter
//     } else {        
//       if (!char || Math.random() < 0.28) {
//         char = getRandomChar();
//         queue[index].char = char
//     }
//     output += `<span>${char}</span>`
//     }
//     el.innerHTML = output;
//   }

//   frame++
//   console.log({ output, frame, complete})
//   return {output, frame, complete}
// }

//   function makeQueue(text) {
//   const length = text.length;
//   let queue = [];
//   for (let index = 0; index < length; index++) {
//     const letter = text[index];
//     const start = Math.floor(Math.random() * 40)
//     const end = start + Math.floor(Math.random() * 40)
//     queue.push({ letter, start, end })
//   }
//   return queue;
// }

// function getRandomChar() {
//   const chars = '!<>-_\\/[]{}—=+*^?#________'
//   return chars[Math.floor(Math.random() * chars.length)]
// }