import { IDS_ELEMENTS_HTML } from "./consts.js"

const $ = (selector) => document.querySelector(selector)

const DISPLAY = $("#display-value")
const DISPLAY_OP = $("#display-op")

const AC_KEY = $("#ac-key")
const SUP_KEY = $("#sup-key")
const PREC_KEY = $("#prec-key")
const DIVI_KEY = $("#divi-key")

const SEVEN_KEY = $("#seven-key")
const EIGHT_KEY = $("#eight-key")
const NINE_KEY = $("#nine-key")
const MULTY_KEY = $("#multy-key")

const FORD_KEY = $("#ford-key")
const FIVE_KEY = $("#five-key")
const SIX_KEY = $("#six-key")
const REST_KEY = $("#--key")

const ONE_KEY = $("#one-key")
const TWO_KEY = $("#two-key")
const THREE_KEY = $("#three-key")
const ADD_KEY = $("#add-key")

const ZERO_KEY = $("#zero-key")
const POINT_KEY = $("#point-key")
const EQUAL_KEY = $("#equal-key")

let PRE_NUMBER = null

//Limpiara todo el display
AC_KEY.addEventListener("click", (e) => {
    DISPLAY.textContent = ""
    DISPLAY_OP.textContent = ""
})
//Eliminara un caracter del lado derecho del display
SUP_KEY.addEventListener("click", (e) => {
    DISPLAY.textContent = DISPLAY.textContent.split("").slice(0, DISPLAY.textContent.length-1).join("")
})
//Convertira en porcentaje el numero que este en el display
PREC_KEY.addEventListener("click", (e) => {
    const NUMBER = parseFloat(DISPLAY.textContent)
    const NEW_NUMBER = NUMBER / 100
    DISPLAY.textContent = `${NEW_NUMBER}`
})
const drawNumberInDisplay = (numberKey) => {
    if(DISPLAY.textContent.length < 8){
        DISPLAY.textContent += `${IDS_ELEMENTS_HTML[numberKey]}`
    }
}
//Agregara caracter de dividir al display
DIVI_KEY.addEventListener("click", (e) => {
    if(DISPLAY.textContent){
        PRE_NUMBER = parseFloat(DISPLAY.textContent)
        DISPLAY.textContent = ""
        DISPLAY_OP.textContent = "/"
        console.log("DIVI_KEY")
    }
})
//Agregar el numero 7 a la display
SEVEN_KEY.addEventListener("click", (e) => drawNumberInDisplay(e.target.id))
//Agregar el numero 8 a la display
EIGHT_KEY.addEventListener("click", (e) => drawNumberInDisplay(e.target.id))
//Agregar el numero 9 a la display
NINE_KEY.addEventListener("click", (e) => drawNumberInDisplay(e.target.id))
//Agregara caracter de multiplicacion al display
MULTY_KEY.addEventListener("click", (e) => {
    if(DISPLAY.textContent){
        PRE_NUMBER = parseFloat(DISPLAY.textContent)
        DISPLAY.textContent = ""
        DISPLAY_OP.textContent = "x"
        console.log("MULTY_KEY")
    }
})
//Agregar el numero 4 a la display
FORD_KEY.addEventListener("click", (e) => drawNumberInDisplay(e.target.id))
//Agregar el numero 5 a la display
FIVE_KEY.addEventListener("click", (e) => drawNumberInDisplay(e.target.id))
//Agregar el numero 6 a la display
SIX_KEY.addEventListener("click", (e) => drawNumberInDisplay(e.target.id))
//Agregara caracter de resta al display
REST_KEY.addEventListener("click", (e) => {
    if(DISPLAY.textContent){
        PRE_NUMBER = parseFloat(DISPLAY.textContent)
        DISPLAY.textContent = ""
        DISPLAY_OP.textContent = "-"
        console.log("REST_KEY")
    }
})
//Agregar el numero 1 a la display
ONE_KEY.addEventListener("click", (e) => drawNumberInDisplay(e.target.id))
//Agregar el numero 2 a la display
TWO_KEY.addEventListener("click", (e) => drawNumberInDisplay(e.target.id))
//Agregar el numero 3 a la display
THREE_KEY.addEventListener("click", (e) => drawNumberInDisplay(e.target.id))
//Agregara caracter de resta al display
ADD_KEY.addEventListener("click", (e) => {
    if(DISPLAY.textContent){
        PRE_NUMBER = parseFloat(DISPLAY.textContent)
        DISPLAY.textContent = ""
        DISPLAY_OP.textContent = "+"
        console.log("ADD_KEY")
    }
})
//Agregar el numero 0 a la display
ZERO_KEY.addEventListener("click", (e) => drawNumberInDisplay(e.target.id))
//Agregara caracter de punto al display
POINT_KEY.addEventListener("click", (e) => {
    if(DISPLAY.textContent.length < 8){
        DISPLAY.textContent += "."
    }
})
//Ejecuta la operacion del display y muestra el resultado en la misma display
EQUAL_KEY.addEventListener("click", (e) => {
    if(DISPLAY.textContent){
        if(DISPLAY_OP.textContent === "/") {
            DISPLAY_OP.textContent = ""
            const NUMBER = parseFloat(DISPLAY.textContent)
            const result = PRE_NUMBER / NUMBER
            const valueToDisplay = Number.isInteger(result) ? result : result.toFixed(2)
            DISPLAY.textContent = `${valueToDisplay}`
        }
        if(DISPLAY_OP.textContent === "x") {
            DISPLAY_OP.textContent = ""
            const NUMBER = parseFloat(DISPLAY.textContent)
            const result = PRE_NUMBER * NUMBER
            const valueToDisplay = Number.isInteger(result) ? result : result.toFixed(2)

            DISPLAY.textContent = `${valueToDisplay}`
        }
        if(DISPLAY_OP.textContent === "-") {
            DISPLAY_OP.textContent = ""
            const NUMBER = parseFloat(DISPLAY.textContent)
            const result = PRE_NUMBER - NUMBER
            DISPLAY.textContent = `${result}`
        }
        if(DISPLAY_OP.textContent === "+") {
            DISPLAY_OP.textContent = ""
            const NUMBER = parseFloat(DISPLAY.textContent)
            const result = PRE_NUMBER + NUMBER
            DISPLAY.textContent = `${result}`
        }
    }
    console.log("EQUAL_KEY")
})