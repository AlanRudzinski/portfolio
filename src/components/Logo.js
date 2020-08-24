const Logo = () => {
    const text = "Alan Rudzinski"
    const logoText = document.querySelector('#logo__text')
    const splitText = text.split('');
    console.log(logoText)

    for(let i = 0; i < splitText.length; i++) {
        logoText.innerHTML += `<span>${splitText[i]}</span>`
        console.log(splitText[i])
    }

}

export default Logo;