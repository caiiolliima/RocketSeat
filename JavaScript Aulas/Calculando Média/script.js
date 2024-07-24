let className = prompt("Qual o nome do aluno? ")
let nota01 = prompt("Digite a primeira nota do(a) " + className)
let nota02 = prompt("Digite a segunda nota do(a) " + className)
let nota03 = prompt("Digite a terceira nota do(a) " + className)

nota01 = Number(nota01)
nota02 = Number(nota02)
nota03 = Number(nota03)

const sum = (nota01 + nota02) + nota03

const media = media2()

function media2() {

  const media = ((nota01 + nota02) + nota03) / 3

  media.toFixed(2).replace(".", ",")
  
  return
}


if (media > 8) {
  
  alert("Parabéns" + className + ", sua média esta positiva. Sua nota é: " + media)
}
