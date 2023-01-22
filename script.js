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

function calculate(){
    firstNum = parseInt(content[0])
    operator = content[1]
    secondNum = parseInt(content[2])
    calc = operate(firstNum, secondNum, operator).toFixed(2)

    if (content.length > 3){
        content.shift()
        content.shift()
        content.shift()
        content.unshift(calc)
        display.textContent = content
        calculate()

    } 
    else {
        display.textContent = calc
    }
       
   
}

function operate(num1, num2, operator){
    switch(operator){
        case "+":
            return num1 + num2;
            break;
        case "-":
            return  num1 - num2;
            break;
        case "/":
            if (num2 ===0){
                display.textContent = "cant divide by 0 dummy"
                break
            }
            return num1 / num2
            break;
        case "*":
            return num1 * num2
            break;
    }
}

function clear(){
    display.textContent = ""
    firstNum = 0
    secondNum = 0
}

let display = document.querySelector(".display")
let firstNum = 0;
let secondNum = 0;
let operator = "";
let content



/*****************  Number buttons *****************s*/

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
const btn19 = document.querySelector("#zero")
btn19.addEventListener('click', () => {
    display.textContent += btn19.textContent
})
/****************** Operator buttons **********************/

const btn10 = document.querySelector("#clear")
btn10.addEventListener('click', () => {
    clear()
})
const btn11 = document.querySelector("#equals")
btn11.addEventListener('click', () => {
    content = display.textContent.split(" ")
    calculate()
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

