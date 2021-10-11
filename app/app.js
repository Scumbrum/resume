const carets = document.querySelectorAll(".fa.fa-chevron-down")
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

function hide(caret){
    caret.className = "fa fa-chevron-down"
    const target = document.getElementById(caret.getAttribute("target"))
    if(target){
        target.removeAttribute("style")
    }
}

function show(caret){
    caret.className = "fa fa-chevron-up"
    const target = document.getElementById(caret.getAttribute("target"))
    if(target){
        target.setAttribute("style","display:block")
    }
}