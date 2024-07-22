/*
  Prototype
  * Prototype-based language
  * Prototype chain
  * *__proto__
*/

/*
    Type conversion (typecasting) vs Type coersion

    *Alteração de um tipo de dado para outro tipo
*/
//Houve coersão pela linguagem JS, transformando o numeral 5 em string
console.log('9' + 5)

//Fazendo a conversão usando a propriedade "Number()"
console.log(Number('9') + 5)

//Manipulando Strings e Number

//Transformar String em número e número em String
let string = '123'

console.log(Number(string))

let number = 321

console.log(String(number))

//Contar quantos caracteres tem uma palavra e quantos digitos tem um numero

let word  = 'Caio'

console.log(word.length)

let number2 = 123

console.log(number2.length)

console.log(String(number2).length)

//Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula

let number3 = 1254.5321456

console.log(number3.toFixed(2).replace(".", ","))


//Transformar letras minúsculas em maiúsculas. Faça o contrário disso também

let name = 'caio'

let name2 = 'CAIO'

console.log(name.toUpperCase())

console.log(name2.toLowerCase())



//Separando um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _

let phrase = 'Eu quero viver o Amor!'

let myArray = phrase.split(" ")

let phraseWithUnderscore = myArray.join("_")

console.log(phraseWithUnderscore.toLowerCase())


//Verificar se o texto contém a palavra Amor

let phrase2 = "Eu quero viver Amor!"

console.log(phrase2.includes("Amor"))



//Criar um array com construtor

let myArray2 = new Array('a', 'b', 'c')

let myArray3 = new Array(19)

console.log(myArray2)

console.log(myArray3.length)


//Contar elementos de um array

console.log(['a','b','c'].length)

console.log(['a', {type: "array"}, function() { return "alo"}][2]())

console.log(['a', {type: "array"}, function() { return "alo"}][1].type)

//Transformar uma cadeia de caracteres em elementos de um array

let word2 = 'manipulação'

console.log(Array.from(word2))



//Manipulando Arrays

let techs = ['html', 'css', 'js']

//Adicionar um item no fim
  techs.push('nodejs')
//Adicionar no começo
  techs.unshift('sql')
//Remover do fim
  techs.pop()
//Remover do começo
  techs.shift()
//Pegar somente alguns elementos do array
  console.log(techs.slice(1, 3))
//Remover 1 ou mais itens em qualquer posição do array
  techs.splice(1,1)
//Encontrar a posição de um elemento no array
  let index = techs.indexOf('css')
  techs.splice(index, 1)

console.log(techs)
