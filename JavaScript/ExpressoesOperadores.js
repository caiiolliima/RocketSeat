/* Expressões e Operadores

    - Expressions
    - Operators
        Binary
        Unary
        Ternary
*/

let number = 1

(function() {
  console.log('alo')
})()

/*
    new

    * left-hand-size expression
    *criar um novo objeto
*/

let name = new String('Caio')
name.surName = 'Lima'
let age2 = new Number(23)
console.log(name,age2)

let date = new Date('2024-07-17')
console.log(date)

/*
    Operadores unários
      tyopeof
      delete
*/
const person = {
  name: "Caio",
  age: 25
}

delete person.age

console.log(person)

//Operadores Aritiméticos

  //multiplicação *
  console.log(3.2 * 5,5)

  //divisão /
  console.log(12 / 2)

  //soma +
  console.log(34 + 67)

  //subtração -
  console.log(34 - 23)
  
  //resto da divisão %
  let remainder
  remainder = 11 % 3
  console.log(remainder)

  //incremento ++
  let increment = 0
  console.log(++increment)
  console.log(increment)
  console.log(increment++)
  console.log(increment)

  //decremento --
  let decrement = 0
  console.log(decrement--)
  console.log(decrement)
  console.log(--decrement)
  console.log(decrement)

  //exponencial **
  console.log(2 ** 2)


  //Grouping operator ( )

let total = 2 + 5 * 5
console.log(total)

//Operadores de comparação

//Irá comparar valores e retornar um Boolean como resposta a comparação

let one = 1
let two = 2

// == igual a
console.log(two == 1)
console.log(one == "1")

// != diferente de
console.log(one != two)
console.log(one != 1)
console.log(one != '1')

// === estritamente igual a 
console.log(one === '1')
console.log(one === 1)

// !== estritamente diferente de
console.log(two !== '2')
console.log(two !== 2)

// > maior que
console.log (one > two)

// >= Maior igual a
console.log(one >= 1)
console.log(two >= 1)

// < menor que
console.log(one < two)

// <= menor igual a
console.log(one <= two)
console.log(one <= 1)
console.log(one <= 0)


//Operadores de atribuição (Assignment)

let x

console.log(x)

// assignment
x = 1
console.log(x)

//addition assignment
x += 2
console.log(x)

//subtraction assignment
x -= 1
console.log(x)

//multiplication assignment
x *= 2
console.log(x)

//division assignment
x /= 2
console.log(x)

//exponecnial assignment
x **= 2
console.log(x)

//Operadores lógicos (logical operators)

// - 2 valores booleanos, quando verificados,
// resultará em verdadeiro ou falso

let pao = true
let queijo = true

// AND &&
console.log(pao && queijo)

// OR ||
console.log(pao || queijo)

// NOT !
console.log(!pao)
console.log(!queijo)


//Operador Condicional (ternário)

//Dependendo da condição, nós receberemos valores diferentes

//Condição então valor 1 se não valor 2
// condition ? value1 : value2

//Exemplo
//Caé da manhã top
let pao2 = true
let queijo2 = true

const niceBreakfast = pao2 && queijo2 ? "Café top" : "Café ruim"

console.log(niceBreakfast)

const niceBreakfast2 = pao2 || queijo2 ? "Café top" : "Café ruim"

console.log(niceBreakfast2)

//Maior de 18
let age = 16

const canDrive = age >= 18 ? "Can Drive" : "Can't Drive"

console.log(canDrive)

const canDrive2 = age <= 18 ? "Can Drive" : "Can't Drive"

console.log(canDrive2)


// Operador de String (String operator)

// Comparison (comparação)
console.log( 'a' === 'a')

// Concatenation (concatenação)
// Retorno a ubião de duas Strings
let alpha = 'alpha'
console.log(alpha + 'bet' + 's')
console.log(alpha += 'bet')


// Falsy
// Quando um valor é considerado false em contextos onde um booleano é obrigatório (condicionais e loops)
// false
// 0
// -0
// ""
// null
// undefined
// NaN

console.log(true ? 'verdadeiro' : 'falso')

console.log(false ? 'verdadeiro' : 'falso')

// Truthy
//  Quando um valor é considerado true em contextos onde um boolenao é obrigatório )condicionais e lopps)
// true
// {}
// []
// 1
// 3.23
// "0"
// "false"
// -1
// infinity
// -infinity

console.log(true ? 'verdadeiro' : 'falso')

console.log({} ? 'verdadeiro' : 'falso')

/*
Operator precedende
  Precedência de operadores 

* grouping ()
* negação e incremento ! ++ -- 
* multiplicação e divisão * /
* adição e subtração + -
* relacional < <= > >=
* igualdade == != === !==
* AND &&
* OR ||
* condicional ?:
* assignment (atribuição) = += -= *=
*/