//Function Experssion
//Function anonymous
//Paramêtros da função
const sum = function(number1,number2) {
  let total = (number1 + number2)
  return total
}

let number1 = 34
let number2 = 25
let total = 0

sum(number1,number2) //Argumentos do parâmetros

console.log(`O número 1 é ${number1}`)
console.log(`o número 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)
console.log(total)


// Criar um aplicativo de frases motivacionais

//Declaração da funcção (Function Statement)
function createPhrases () {
  console.log('Estudar é muito bom');
  console.log('Paciência e persistência');
  console.log('Revisão é mae do aprendizado');
};

createPhrases();


//Scopo de função
let subject = 'create video'

function createThink (subject) {
  subject = 'study'
  return subject
}

console.log(subject)
console.log(createThink(subject))


//Function Hoisting

sayMyName()

//Para funcionar o código é necessário comentar ate a linha 38 (Declarando variável com função e passando o parâmetro não funciona o hoisting)
const sayMyName = function() {
  console.log('Caio')
}

var sayMyName = function() {
  console.log('Caio')
}

function sayMyName() {
  console.log('Caio')
}

//Arrow function (jeito moderno)

const sayMyName = (name) => {
  console.log(name)
}

sayMyName('Caio')


//Callback Function

function sayMyName(name) {
  console.log('Antes de executar a função callback')

  name()

  console.log('Despois de executar uma função callback')
}

sayMyName(
  () => {
    console.log('Estou em uma callback')
  }
)

/*
//function() constructor

  *Expressão new
  *Criar um novo Objeto
  *This keyword
*/

function Person(name) {
  this.name = name

  this.walk = function() {
    return this.name + " esta andando"
  }
}

const caio = new Person('Caio')
const camila = new Person('Camila')

console.log(caio.walk())
console.log(camila.walk())