// Exemplos da aula

// Spread Operator - pode ser utilizado para combinar objetos e arrays, para copiar valores de objetos iteráveis, e em funções que recebem múltiplos argumentos.

/* const conhecimentosTrybe = {
    softSkills: true,
    hardSkills: true,
    trabalho: true,
}

const pessoa = {
    nome: "Nádia",
    idade: "28",
    cidade: "BH",
}

const pessoaTryber = {
    ...pessoa,
    ...conhecimentosTrybe,
    esporte: "corrida",
}

console.log(pessoaTryber); */

/* const numbers = [1, 2, 3];

const newArray = [...numbers, 4, 5, 6];
console.log(newArray);
console.log(numbers); */

/* const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ... winter, ...spring];
console.log(months); */

/* const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];

console.log(imc(...patientInfo));
console.log(imc(60, 1.7)); */

// E você pode aplicar esse conceito em funções prontas do Javascript que recebem múltiplos parâmetros, como as funções Math.max e Math.min. Vamos ver um exemplo?
/* const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

console.log(Math.max(...randomNumbers));
console.log(Math.min(...randomNumbers)); */

//Outro exemplo que pode ser válido para a sua compreensão é que você também pode fazer o mesmo com objetos. Veja o exemplo abaixo:
/* const people = {
    id: 101,
    name: 'Alysson',
    age: 25,
};

const about = {
    address: 'Av. Getúlio Vargas, 1000',
    occipation: 'Developer',
};

const customer = { ...people, ...about };
console.log(customer); */

// PARA FIXAR
// Faça uma lista com as suas frutas favoritas
/* const specialFruit = ['banana', 'manga', 'mamão'];
// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['granola', 'leite condensado', 'iogurte'];

const fruitSalad = (fruit, additional) => {
    const salad = [...fruit, ...additional];
    return salad;
};

console.log(fruitSalad(specialFruit, additionalItens)); */

// Parâmetro Rest - é uma feature do ES6 que permite com que você crie funções que recebam um número variável de argumentos.

/* function quantosParams(...args) {
    console.log('parâmetros: ', args);
    return `Você passou ${args.length} parâmetros para a função.`;
}

console.log(quantosParams(0, 1, 2));
console.log(quantosParams('string', null, [1, 2, 3], {})); */

/* const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60)); */

// Object Destructuring - A sintaxe da desestruturação de objetos pede para passarmos o nome das propriedades que queremos acessar do lado esquerdo, entre chaves, e o objeto do lado direito:

/* const product = {
    name: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
  };

const {name, seller} = product;
console.log(name);
console.log(seller); */


/* Queremos extrair o nome do personagem, a idade, o nome do planeta e verificar se ele é um Jedi. Depois de feito, precisamos imprimir essas informações no console.log(), para isso, vamos utilizar a desestruturação de objetos: */
// definindo o objeto
/* const character = {
    name: 'Luke SkyWalker',
    age: '53',
    description: {
      specieName: 'Human',
      jedi: true,
    },
    homeWorld: {
      name: 'Tatooine',
      population: '200000',
    },
  };

  // desestruturando o objeto:
  const {name, age, homeWorld: {name: planetName}, description: {jedi} } = character;
  // imprimindo os valores:
  console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`); */

  //Podemos também usar a desestruturação de objetos em conjunto com o spread operator, veja abaixo:
/*   const daysOfWeek = {
      workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      weekend: ['Saturday', 'Sunday'],
  };

  const {workDays, weekend} = daysOfWeek;
  console.log(workDays);
  console.log(weekend);

  const weekDays = [...workDays, ...weekend];
  console.log(weekDays); */

  /* Outro truque legal dessa feature é que você pode reatribuir o nome da propriedade que deseja acessar ao declará-la como uma variável. Acompanhe o exemplo abaixo: */

/*   const student = {
    a: 'Maria',
    b: 'Turma B',
    c: 'Matematica',
  };

  const {a: name, b: classAssigned, c: subject} = student;

  console.log(name);
  console.log(classAssigned);
  console.log(subject); */

  /* Uma outra situação que podemos usar a desestruturação de objetos é quando queremos passar os valores de um objeto como parâmetros para uma função, como no exemplo abaixo: */
/*   const product = {
    name: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
  };
  
  const printProductDetails = ({ name, price, seller }) => {
    console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
  };
  
  printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas */

  // PARA FIXAR

  /* 1 - Temos dois objetos, um com informações pessoais de uma pessoa usuária e outro com informações referentes ao cargo desta pessoa usuária na empresa trappistEnterprise. Precisamos criar um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos. Para isso, utilize o spread operator. */


/* const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
  };
  
  const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };

  const userAndJobInfos = {
      ...user,
      ... jobInfos,
    };

// 2 - Com o objeto em mãos, imprima no console uma frase de sua escolha utilizando os dados do objeto criado anteriormente. Para isso, utilize a desestruturação de objetos em conjunto com template literals.

const { name, age, nationality, profession, squad, squadInitials } = userAndJobInfos;

console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`); */

// Array Destructuring
// PARA FIXAR

// 1 - Produza o mesmo resultado do código, porém utilizando o array destructuring para recolher a função e a saudação.
/* const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring
const [saudacao, realizaSaudacao] = saudacoes;

console.log (realizaSaudacao(saudacao)); // Olá */

// 2 - A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da desestruturação de arrays, corrija os valores das variáveis.

/* let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

[comida, animal, bebida] = [bebida, comida, animal]; // Criando o array e o desestruturando
console.log(comida, animal, bebida); // arroz gato água */

// 3 - array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir. Através de array destructuring, faça com que existam apenas números pares na variável numerosPares.
/* let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

[,,, ...numerosPares] = numerosPares;

console.log(numerosPares); // [6, 8, 10, 12]; */

// Default Destructuring

/* const person = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

const { nationality = 'Brazilian'} = person;

console.log(nationality); */

// PARA FIXAR

/* const getNationality = ({ firstName, nationality = "Brazilian" }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person)); // João is Brazilian */

// Object Property Shorthand

// Sem Shorthand
/* const newUser = (id, name, email) => {
  return {
    id: id,
    name: name,
    email: email,
  };
};

console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }

// Com Shorthand
const newUser2 = (id, name, email) => {
  return {
    id,
    name,
    email,
  };
};

console.log(newUser2(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' } */

// PARA FIXAR
// Agora é hora de praticar: altere a função getPosition utilizando a property shorthand.
/* const getPosition = (latitude, longitude) => ({
  latitude,
  longitude});

console.log(getPosition(-19.8157, -43.9542)); */

// Default Parameters
/* const greeting = (user) => console.log(`Welcome ${user}!`);

greeting(); // Welcome undefined! */

/* const greeting = (user) => {
  const userDisplay = typeof user === 'undefined' ? 'usuário' : user;
  console.log(`Welcome ${userDisplay}!`);
};

greeting(); // Welcome usuário! */

/* const greeting = (user = 'usuário') => console.log(`Welcome ${user}!`);

greeting(); // // Welcome usuário! */

// PARA FIXAR
// Para praticar, escreva uma função multiply que multiplique dois números passados como argumentos. Atribua como default o valor 1 caso não seja passado nenhum valor como segundo parâmetro.
const multiply = (number, value = 1) => {
  // Escreva aqui a sua função
  return number * value
};

console.log(multiply(8));
