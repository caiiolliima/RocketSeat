let firstNumber = prompt('Digite o primeiro número: ')
let secondNumber = prompt('Digite o segundo número: ')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)
/*
let totalSoma = firstNumber +  secondNumber

alert("O total da soma é:" + totalSoma)

let totalSub = firstNumber - secondNumber

alert("O total da subtração é: " + totalSub)

let totalMulti = firstNumber * secondNumber

alert("O total da multiplicação é: " + totalMulti)

let totalDivi = firstNumber / secondNumber

alert("O total da divisão é: " + totalDivi)

let totalResto = firstNumber % secondNumber

alert("O resto é: " + totalResto)
*/
const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const divi = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert("O total da soma é:" + sum)
alert("O total da subtração é: " + sub)
alert("O total da multiplicação é: " + multi)
alert("O total da divisão é: " + divi)
alert("O resto é: " + restDiv)