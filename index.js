
let num1 = 22
let num2 = 18
let answerEl = document.getElementById("answer-el")
let factorEl = document.getElementById("factor-el")


document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

function add() {
    let sum = num1 + num2
    factorEl.textContent= " + "
    answerEl.textContent = "Answer: " + sum
}

function subtract() {
    let sum = num1 - num2
    factorEl.textContent= " - "
    answerEl.textContent = "Answer: " + sum   
}

function multiply() {
    let sum = num1 * num2
    factorEl.textContent= " * "
    answerEl.textContent = "Answer: " + sum 
}

function divide() {
    let sum = num1 / num2
    factorEl.textContent= " / "
    answerEl.textContent = "Answer: " + sum 
}

