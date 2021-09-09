function initialize() {
    let menu = document.querySelector("#menu")
    menu.children[0].classList.add("current")
    document.addEventListener("scroll", setMenu)
    setMenuButtons()
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

function setMenuButtons() {
    let navButtons = document.querySelector("#menu").children
    for (let i=0; i<navButtons.length; i++) {
        navButtons[i].addEventListener("click", (e) => {
            let index = Array.prototype.indexOf.call(e.target.parentNode.children, e.target)
            window.scrollTo( {
                left: 0, 
                top: window.innerHeight*index, 
                behavior: "smooth" })
        })
    }
}

initialize()