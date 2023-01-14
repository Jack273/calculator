function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
} 

function multiply(a ,b){
    return a * b;
}

function divide(a, b){
    return a/b;
}

function operate(num1, num2, operator){

}

let display = document.querySelector(".display")

const btn1 = document.querySelector("#one")
btn1.addEventListener('click', () => {
    display.textContent += btn1.textContent
})
const btn2 = document.querySelector("#two")
btn2.addEventListener('click', () => {
    display.textContent += btn2.textContent
})
const btn3 = document.querySelector("#three")
btn3.addEventListener('click', () => {
    display.textContent += btn3.textContent
})
const btn4 = document.querySelector("#four")
btn4.addEventListener('click', () => {
    display.textContent += btn4.textContent
})
const btn5 = document.querySelector("#five")
btn5.addEventListener('click', () => {
    display.textContent += btn5.textContent
})
const btn6 = document.querySelector("#six")
btn6.addEventListener('click', () => {
    display.textContent += btn6.textContent
})
const btn7 = document.querySelector("#seven")
btn7.addEventListener('click', () => {
    display.textContent += btn7.textContent
})
const btn8 = document.querySelector("#eight")
btn8.addEventListener('click', () => {
    display.textContent += btn8.textContent
})
const btn9 = document.querySelector("#nine")
btn9.addEventListener('click', () => {
    display.textContent += btn9.textContent
})
const btn10 = document.querySelector("#clear")
btn10.addEventListener('click', () => {
    display.textContent = ""
})
const btn11 = document.querySelector("#equals")
btn11.addEventListener('click', () => {
    operate()
})
const btn12 = document.querySelector("#plus")
btn12.addEventListener('click', () => {
    display.textContent += " + "
})
const btn13 = document.querySelector("#minus")
btn13.addEventListener('click', () => {
    display.textContent += " - "
})
const btn14 = document.querySelector("#divide")
btn14.addEventListener('click', () => {
    display.textContent += " / "
})
const btn15 = document.querySelector("#multiply")
btn15.addEventListener('click', () => {
    display.textContent += " * "
})
 
// buttons.forEach(button => {
//     button.addEventListener('click', () =>{
//     display.textContent = button.textContent;
//     })})

