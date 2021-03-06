//ARRAY.FILTER - CONTEÚDO DO DIA 8.3

/* // Trocando o find pelo filter

const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.filter(verifyEven);

console.log(isEven);

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.filter((number) => number % 2 === 0);

console.log(isEven2); */

/* // Outro exemplo de apenas pegar os elementos que não possuem alguma condição. Neste caso, deseja-se apenas as pessoas que não possuem ainda idade para dirigir:

const objPeople = [
    { name: 'José', age: 21 },
    { name: 'Lucas', age: 19 },
    { name: 'Maria', age: 16 },
    { name: 'Gilberto', age: 18 },
    { name: 'Vitor', age: 15 },
];

const verifyAgeDrive = (arrayOfPeople) => (
    arrayOfPeople.filter((people) => (people.age < 18))
);

console.log(verifyAgeDrive(objPeople));
 */
/* // Outra forma de se usar o filter é retornar um array sem o elemento desejado. É preciso remover o Ricardo do objeto agora, já que ele não é mais um estudante.

const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const removeStudentByName = (name, listStudents) =>
    listStudents.filter((student) => student !== name);
    //Filtra todos os estudantes que não tem o nome 'Ricardo' e retorna um array com eles. Na prática, remove o Ricardo do array.

    const newListStudents = removeStudentByName('Ricardo', arrayMyStudents);
    console.log(newListStudents);
 */
// ARRAY.MAP
// Veja a diferença entre fazer uma mesma função usando for e em seguida usando map:

/* // Com o for
const persons = [
    { firstName: 'Maria', lastName: 'Ferreira' },
    { firstName: 'João', lastName: 'Silva' },
    { firstName: 'Antônio', lastName: 'Cabral' },
];

const fullNames = [];

for (let index = 0; index < persons.length; index += 1) {
    fullNames.push(`${persons[index].firstName} ${persons[index].lastName}`);
}

console.log(fullNames);

// Agora com a função Map
const fullNames2 = persons.map((person) => `${person.firstName} ${person.lastName}`);

console.log(fullNames2);
 */

/* // Exemplo da animação (multiplica cada elemento por 2)

const numbers = [ 10, 20, 30, 40, 50];

const multiplyFor2 = numbers.map((number) => (number * 2));

console.log(numbers);
console.log(multiplyFor2);
 */
/* // Vamos praticar um outro exemplo numérico, para fixar bem o que o map faz. Suponha que é preciso transformar todos os números em negativos e passa-lós para um array novo.
const numbers = [1, 2, 3, 4, -5];

const negativeNumbers = numbers.map((number) => ((number > 0 ) ? number * (-1) : number));

console.log(negativeNumbers);
console.log(numbers);

// E como seria apenas com for?

const negativeNumbers2 = [];
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > 0 ) {
        negativeNumbers2.push(numbers[index] * -1);
    } else {
        negativeNumbers2.push(numbers[index]);
    }
}

console.log(negativeNumbers2);
console.log(numbers); */

/* // Outras formas de usar o .map é unir dois arrays para criar um novo. Considere que você possui duas listas: o preço do primeiro produto (Arroz) é o primeiro elemento da lista prices (2.99), e assim por diante:
const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];
// Deseja-se juntá-las em apenas uma lista de objetos que fiqeu dessa forma:
//const listProducts = [{Arroz: 2.99}, ...]
const updateProducts = (listProducts, listPrices) => listProducts.map((product, index) => (
    { [product]: listPrices[index] }
));

const listProducts = updateProducts(products, prices);
console.log(listProducts);
 */
// Agora, hora de ver como pode-se usar as outras HOFs junto com o map. Para os exemplos a seguir será usado um array com os dados de estudantes de um colégio.
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
        { name: 'Biologia', nota: 55 },
      ],
    },
    {
      nome: 'Mario',
      sobrenome: 'Ferreira',
      idade: 15,
      turno: 'Tarde',
      materias: [
        { name: 'Matemática', nota: '59' },
        { name: 'Português', nota: '80' },
        { name: 'Química', nota: '78' },
        { name: 'Biologia', nota: '92' },
      ],
    },
    {
      nome: 'Jorge',
      sobrenome: 'Santos',
      idade: 15,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '76' },
        { name: 'Português', nota: '90' },
        { name: 'Química', nota: '70' },
        { name: 'Biologia', nota: '50' },
      ],
    },
    {
      nome: 'Maria',
      sobrenome: 'Silveira',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '91' },
        { name: 'Português', nota: '85' },
        { name: 'Química', nota: '92' },
        { name: 'Biologia', nota: '90' },
      ],
    },
    {
      nome: 'Natalia',
      sobrenome: 'Castro',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '70' },
        { name: 'Português', nota: '70' },
        { name: 'Química', nota: '60' },
        { name: 'Biologia', nota: '50' },
      ],
    },
    {
      nome: 'Wilson',
      sobrenome: 'Martins',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '80' },
        { name: 'Português', nota: '82' },
        { name: 'Química', nota: '79' },
        { name: 'Biologia', nota: '75' },
      ],
    },
  ];

/* // Segue-se alguns exemplos de funções apenas usando for e depois como refatorá-las para quem usem HOFs.
// Função para buscar e imprimir o nome completo de todos os estudantes que estudam no turno da manhã.

const allNameStudents = [];

for (let index = 0; index < estudantes.length; index += 1) {
    if (estudantes[index].turno === 'Manhã') {
        allNameStudents.push(`${estudantes[index].nome} ${estudantes[index].sobrenome}`)
    }
}

console.log(allNameStudents);

// Com map e filter

const allNameStudents2 = estudantes.filter((estudante) => (
    estudante.turno === 'Manhã')).map((estudante) => `${estudante.nome} ${estudante.sobrenome}`);

console.log(allNameStudents);
 */

// Agora vamos usar um map com um find.
// Buscar um estudante pelo nome e retornar a situação dele em cada matéria:
// Apenas com for:

const findStudent = (name, students) => {
    for (let index = 0; index < students.length; index += 1) {
        if (students[index].nome === name) {
            return students[index];
        }
    }
};

const reportStatus = (name, students) => {
    const getStudent = findStudent(name, students);
    const report = [];
    for (let index = 0; index < getStudent.materias.length; index += 1) {
        if (getStudent.materias[index].nota >= 60) {
            report.push(`${getStudent.materias[index].name} Aprovado`);
        } else {
            report.push(`${getStudent.materias[index].name} Reprovado`);
        }
    }
    return report;
};

console.log(reportStatus('Jorge', estudantes));

// Com find e map.

const reportStatus2 = (name, students) => {
    const studentInfo = students.find((student) => student.nome === name);
    return studentInfo.materias.map((materia) => (
        `${materia.name} ${(materia.nota >= 60) ? 'Aprovado' : 'Reprovado'}`
    ));
};

console.log(reportStatus2('Jorge', estudantes));