const carets = document.querySelectorAll(".label")
let statuses = new Map()
for(let caret of carets){
    statuses.set(caret,false)
}

for (let caret of carets) {
    caret.addEventListener('click', () => {
        if(statuses.get(caret)){
            hide(caret)
        }
        else{
            show(caret)
        }
        statuses.set(caret,!statuses.get(caret))
    })
}

document.querySelectorAll(".print").forEach(element => {
    element.addEventListener("click", () => {window.print()})
    }
)

function hide(caret){
    const trgetName = caret.getAttribute("target")
    const target = document.getElementById(trgetName)
    const arrow = document.querySelector(`.label[target="${trgetName}"] i`)
    if(target){
        target.removeAttribute("style")
        arrow.className = "fa fa-chevron-down"
    }
}

function show(caret){
    const trgetName = caret.getAttribute("target")
    const target = document.getElementById(trgetName)
    const arrow = document.querySelector(`.label[target="${trgetName}"] i`)
    if(target){
        target.setAttribute("style","display:block")
        arrow.className = "fa fa-chevron-up"
    }
}