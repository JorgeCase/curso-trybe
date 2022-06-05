// Conteúdo Course 8.4 - HIgher Order Functions - reduce

/* const numbers = [32, 15, 3, 2, -5, 56, 10];

const sumNumbers = numbers.reduce((result, number) => result + number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
console.log(sumNumbers); // 113

// Ou seja:

const getSum = (result, number) => result + number;
const sumNumbers2 = numbers.reduce(getSum);
console.log(sumNumbers2); // 113
 */

/* const collection = [1, 2, 3, 4, 5];

const getSum = (accumulator, number) => {
    console.log(accumulator); // Aqui irá acumular os valores 1 3 6 10
    return accumulator + number;
};

const sumNumbers = collection.reduce(getSum);
console.log(sumNumbers);

// A função acima também poderia ter sido escrita da seguinte forma:

const sumNumbers3 = collection.reduce((accumulator, number) => accumulator + number);
console.log(sumNumbers3); */

/* O reduce possui uma outra diferença: você pode passar um segundo parâmetro para o reduce, logo após a função. Veja a seguir, será usado o último exemplo dado da soma dos números: */
/* const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
  console.log('Acumulador: ' + result); // 32 47 50 52 47 103
  return result + number;
};

const sumNumbers = numbers.reduce(getSum);
console.log('Primeiro resultado: ' + sumNumbers); // 113

// com a alteração:

const numbers2 = [32, 15, 3, 2, -5, 56, 10];

const getSum2 = (result2, number2) => {
  console.log('Acumulador: ' + result2); // 0 32 47 50 52 47 103
  return result2 + number2;
  };
const sumNumbers2 = numbers2.reduce(getSum2, 0); // Parâmetro adicionado ao reduce: o "0"
console.log('Segundo resultado: ' + sumNumbers2); // 113
 */
/* Pode ver que mudou em nada o resultado da função. Mas veja que o primeiro valor do result não foi 32, mas sim 0.
Agora mude o 0 para 10 ou qualquer outro valor. */

/* const numbers3 = [32, 15, 3, 2, -5, 56, 10];

const getSum3 = (result3, number3) => {
  console.log('Acumulador: ' + result3); // 10 42 57 60 62 57 113
  return result3 + number3;
  };
const sumNumbers3 = numbers3.reduce(getSum3, 40);
console.log('Terceiro resultado: ' + sumNumbers3); // 123
 */
// Outro exemplo de uso do reduce, serão comparados valores para buscar o maior valor em um array:

/* const numbers4 = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

const bigger = numbers4.reduce(getBigger, 0);
console.log(bigger); */

// Para fixar ainda mais conceito de reduce, faça uma função que some todos os números pares do array:

// Solução usando filter e reduce 
/* const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
 const getEven = (number) => number % 2 === 0;
 const sumPair = (currentValue, number) => currentValue + number;

 const sumNumbers = (array) => array.filter(getEven).reduce(sumPair);

 console.log(sumNumbers(numbers)); */

 // Solução usando apenas o reduce
/*  const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

 const sumPair = (currentValue, number) => (
     (number % 2 === 0) ? currentValue + number : currentValue
 );

 const sumNumbers = (array) => array.reduce(sumPair, 0);

 console.log(sumNumbers(numbers)); */

 /* Agora crie uma função usando os dados dos estudantes que usamos no conteúdo do dia anterior, para mostrar na tela um que diz em qual matéria o estudante foi melhor. Você usará tanto o map quanto, dentro dele, o reduce! */ 
 const estudantes = [
    {
      nome: 'Jorge',
      sobrenome: 'Silva',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 67 },
        { name: 'Português', nota: 79 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 65 },
      ],
    },
    {
      nome: 'Mario',
      sobrenome: 'Ferreira',
      idade: 15,
      turno: 'Tarde',
      materias: [
        { name: 'Matemática', nota: 59 },
        { name: 'Português', nota: 80 },
        { name: 'Química', nota: 78 },
        { name: 'Biologia', nota: 92 },
      ],
    },
    {
      nome: 'Jorge',
      sobrenome: 'Santos',
      idade: 15,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 76 },
        { name: 'Português', nota: 90 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 80 },
      ],
    },
    {
      nome: 'Maria',
      sobrenome: 'Silveira',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 91 },
        { name: 'Português', nota: 85 },
        { name: 'Química', nota: 92 },
        { name: 'Biologia', nota: 90 },
      ],
    },
    {
      nome: 'Natalia',
      sobrenome: 'Castro',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 70 },
        { name: 'Português', nota: 70 },
        { name: 'Química', nota: 60 },
        { name: 'Biologia', nota: 50 },
      ],
    },
    {
      nome: 'Wilson',
      sobrenome: 'Martins',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 80 },
        { name: 'Português', nota: 82 },
        { name: 'Química', nota: 79 },
        { name: 'Biologia', nota: 75 },
      ],
    },
  ];

// Solução

const getBestClass = (acc, materia) => {
    if (acc.nota > materia.nota) return acc;
    return materia;
};

const reportBetter = (students) => students.map((student) => ({
    name: student.nome,
    materia: student.materias.reduce(getBestClass).name}));

console.log(reportBetter(estudantes));