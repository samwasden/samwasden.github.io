function initialize() {
    let menu = document.querySelector("#menu")
    menu.children[0].classList.add("current")
    document.addEventListener("scroll", setMenu)
    setMenuButtons()
}

function initializeMobile() {
    setMenuButtons(1)
    checkScroll()
}

function setMenu() {
    let menu = document.querySelector("#menu")
    let position = Math.floor(window.scrollY/window.innerHeight)
    let bar = document.querySelector("section")
    let pos = Math.floor((window.scrollY*100)/(window.innerHeight*3))
    bar.style.background = `linear-gradient(rgba(244,241,222,0) 0%, rgba(255,255,255,.75) ${pos}%, rgba(244,241,222,0) 100%)`
    for(let i=0; i<menu.children.length; i++) {
        menu.children[position].classList.add("current")
        if (menu.children[i].classList.contains("current")) {
            if (position != i) {
                menu.children[i].classList.remove("current")
            }
        }
    }
}

function setMenuButtons(mobile = 0) {
    let navButtons = document.querySelector("#menu").children
    for (let i=0; i<navButtons.length; i++) {
        navButtons[i].addEventListener("click", (e) => {
            let index = Array.prototype.indexOf.call(e.target.parentNode.children, e.target)
            window.scrollTo( {
                left: 0, 
                top: window.innerHeight*(index + mobile), 
                behavior: "smooth" })
        })
    }
    setSubmitButton()
}

function setSubmitButton() {
    let form = document.querySelector('#contactMe')

    form.addEventListener('submit', submitForm)
}

function submitForm(e) {
    console.log('hello')
    e.preventDefault()
    let name = document.querySelector('#userName').value || 'name'
    let message = document.querySelector('#userMessage').value || 'message'
    let company = document.querySelector('#userCompany').value || 'company'
    let email = document.querySelector('#userEmail').value || 'email'
    const ACTION_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeqc8yHHc5tiD0axwvozh3d9L1K-sf9OKOxPAmcNEGpoyHZqg/viewform?usp=sf_link'
    const NAME_ID = 'entry.732343598';
    const MESSAGE_ID = 'entry.263866717';
    const COMPANY_ID = 'entry.1774717764';
    const EMAIL_ID = 'entry.998396544';
    const formData = new FormData();
    formData.append(NAME_ID, name)
    formData.append(MESSAGE_ID, message)
    formData.append(COMPANY_ID, company)
    formData.append(EMAIL_ID, email)

    axios.post(ACTION_URL, formData)
        .then(res => {console.log(res.data)})
        .catch(err => { console.log(err)});
}


if (screen.width >= 768) {
    initialize()
} else {
    initializeMobile()
}
