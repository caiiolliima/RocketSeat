
console.log('Bem-vindo ao starter');

//Estrutura de dados: Objeto
console.log({
  name:"Caio",
  idade:"28",
  andar:function() {
    console.log('Andar')
  }
});

//Estrutura de dados: Array
console.log(["Caio", "28", "Shark","Hela","Ariana","Davi","Camila","Maria","Gustavo","Valdecir","Eduardo","Ado"]);

//Declaração de variaveis
let clima = ""

console.log(clima);

//Criando bloco de códigos
//var é uma variavel global e, também local
  console.log("> existe x antes do bloco?", x);
{
  var x = 0;
}
  console.log("> existe x depois do bloco?", x);

//Let e const são locais
  console.log("> existe y antes do bloco", y);

{
  let y = 0;
  console.log("> existe y depois do bloco?", y);
}
  console.log("> existe y depois do bloco?", y);

//Objeto

const person = {
  name: 'Caio',
  age: 28,
  weight: 86,
  isAdmin: true 
}

console.log(`${person.name} tem ${person.age} anos`);

//Arrays

const animals = [
  'Leao',
  'Macaco',
  'Gato',
  {
    name: 'Cachorro',
    age: 5
  }
]

console.log(animals[3].name);


let weight;

console.log(typeof weight);

  let name = 'Caio'
  let age = 28
  let stars = 10.5
  let isSubscribed = true

let student = {
  name: 'Caio',
  age: 28,
  isSubscribed: true,
  weight: 86
}

//console.log(`${student.name} de idade ${student.age} pesa ${student.weight}`);

let students = [
  student
]

console.log(students);
