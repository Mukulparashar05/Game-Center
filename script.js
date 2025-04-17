let divs = document.querySelector("button")
let body = document.querySelector("body")

function fxn() {

    body.style.backgroundColor = "#563440"
}
function fxn2() {
    body.style.backgroundColor = "#7A3B69"
}
divs.addEventListener("mouseover", fxn)

divs.addEventListener("mouseout", fxn2)
