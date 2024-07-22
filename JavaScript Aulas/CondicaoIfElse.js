// IF e ELSE

let temparature = 36.5

if(temparature >= 37) {
  console.log("Você esta com febre")
} else {
  console.log("Você não esta com febre")
}

if(temparature > 37.5) {
  console.log("Você esta com febre alta")
} else if (temparature < 37.5 && temparature >= 37) {
  console.log("Você esta com febre")
} else {
  console.log("Você não esta com febre")
}

// Switch

let expression = 'a'

switch (expression) {
  case 'a' :
    console.log('a')
    break
  case 'b' :
    console.log('b')
    break
  default:
    console.log('default')
    break
}

function calculate (number1, operator, number2) {

  let result = 0

  switch (operator) {
    case '+' :
      result = number1 + number2
      break
    case '-':
      result = number1 - number2
      break
    case '*':
      result = number1 * number2
      break
    case '/':
      result = number1 / number2
      break
    default:
      console.log('Não implementado')
      break
  }

  return result
}

console.log (calculate(4, "+", 8))

// Throw 

function sayMyName (name = '') {
  if (name === '') {
    throw new Error('Nome é necessário')
  }

  console.log('Depois do erro')
}

// Try...catch
try {
  sayMyName()
} catch(e) {
  console.log(e)
}

console.log('após try...catch')