// Estrutura de repetição

//For
//break - para a execução do loop
//continue - pula o número informado

for(let i = 10; i > 0; i--) {
  if(i === 5){
    break;
  }

  console.log(i)

}

for(let i = 10; i > 0; i--) {
  if(i === 5) {
    continue;
  }

  console.log(i)

}

//While

let i = 6123467;

while(i > 10) {

  console.log(i)

  i /= 35
}

//For...of

let name = 'Caio'
let names = ['Caio', 'Camila', 'Ariana','Davi','Valdecir','Maria']

for(let name of names) {
  console.log(name)
}

//For...in

let person = {
  name: 'Caio',
  age: 28,
  weight: 86
}

for(let property in person) {
  console.log(property)
  console.log(person[property])
}