let plus1Home = document.getElementById("plus1home")

let plus2Home = document.getElementById("plus2home")

let plus3Home = document.getElementById("plus3home")

let plus1Guest = document.getElementById("plus1guest")

let plus2Guest = document.getElementById("plus2guest")

let plus3Guest = document.getElementById("plus3guest")

let scoreH = document.getElementById("scoreH")

let scoreG = document.getElementById("scoreG")

let scoreGe = 0
let scoreHe = 0

function plus1H() {
    scoreHe += 1
    scoreH.textContent = scoreHe
   
}

function plus2H() {
      scoreHe += 2
    scoreH.textContent = scoreHe
}

function plus3H() {
     scoreHe += 3
    scoreH.textContent = scoreHe
}

function plus1G() {
    scoreGe += 1
    scoreG.textContent = scoreGe
}

function plus2G() {
    scoreGe += 2
    scoreG.textContent = scoreGe
}

function plus3G() {
    scoreGe += 3
    scoreG.textContent = scoreGe
}

function newG() {
 scoreG.textContent = 0
  scoreH.textContent = 0
  scoreGe = 0
  scoreHe = 0
}

function lead() {
    
}