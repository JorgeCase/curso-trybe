//Conteúdo do course dia 04-04
//Desenvolvimento das atividades propostas na explicação
/*
let name = 'Milton';
let lastName = 'Nascimento';
let nickName = 'Bituca';
let age = 77;
let bestAlbuns = ['Travessia', 'Clube da Esquina', 'Minas'];

let singer = {
    name: 'Milton',
    lastName: 'Nascimento',
    nickName: 'Bituca',
    age: 77,
    bestAlbuns: ['Travessia', 'Clube da Esquina', 'Minas'],
    //criando um objeto dentro de outro objeto
    bonrInfo: {
        city: 'Rio de Janeiro',
        state: 'Rio de Janeiro'
    }
};

console.log('O cantor ' + singer.name + ' ' + singer.lastName + ' possui ' + singer.age + ' anos.');

//Essa é uma outra forma de acessar os valores das propriedades de um objeto, retira o ponto e insere os colchetes e aspas.
console.log('O cantor ' + singer['name'] + ' ' + singer['lastName'] + ' possui ' + singer['age'] + ' anos.'); 

singer['fullName'] = singer.name + ' ' + lastName;

console.table(singer);

//Utilizando um objeto que esta dentro de outro objeto
console.log('O cantor ' + singer.fullName + ' nasceu no estado do ' + singer.bonrInfo.state + ', na cidade do ' + singer.bonrInfo.city);
*/
/*
//Segundo exemplo
let diasDaSemana = {
    1: 'domingo',
    2:'segunda',
    3: 'terça',
    4: 'quarta',
    5: 'quinta',
    6: 'sexta',
    7: 'sábado',
};

diasDaSemana[1]; //SybtaxError: Unecpected number. Aqui a proposta era escrever o comando diasDaSemana.1; mas a correção já aconteceu altomaticamente devido a extensão instalada no VSCODE.
console.log(diasDaSemana['1']); //Não é possível usar o ponto (.) nas propriedades nomeadas com número
*/
// terceiro exemplo
/*
let conta = {
    agencia: '0000',
    banco: {
        cod: '012',
        id: 4,
        nome: 'TrybeBank',
    },
};

let infoDoBanco = 'banco';
console.log(conta[infoDoBanco]); //vai escrever => {cod: '012', id: 4, nome: 'TrybeBank1}
console.log(conta[infoDoBanco]['nome']); // TrybeBank

console.log(conta.agencia); // 0000
console.log(conta['agencia']); // 0000

console.log(conta.banco.cod);   // 012
console.log(conta['banco']['id']); // 4
*/
/*
//Quarto Exemplo
let usuario = {
    id: 99,
    email: 'jakeperalta@gmail.com',
    infoPessoal: {
        nome: 'Jake',
        sobrenome: 'Peralta',
        endereco: {
            rua: 'Smith Street',
            bairro: 'Brooklyn',
            cidade: 'Nova Iorque',
            estado: 'Nova Iorque',
        },
    },
};

console.log(usuario['id']); // 99
console.log(usuario.email); // jakeperalta@gmail.com

console.log(usuario.infoPessoal.endereco.rua); // Smith Street
console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque
*/
/*
// Quinto Exemplo - Como acessar as informações de uma array dentro de um objeto
let moradores = [
    {
        nome: 'Luiza',
        sobrenome: 'Guimarães',
        andar: 10,
        apartamento: 1005,
    },
    {
        nome: 'William',
        sobrenome: 'Albuquerque',
        andar: 5,
        apartamento: 502,
    },
    {
        nome: 'Murilo',
        sobrenome: 'Ferraz',
        andar: 8,
        apartamento: 804,
    },
    {
        nome: 'Zoey',
        sobrenome: 'Brooks',
        andar: 1,
        apartamento: 101,
    },
];

let primeiroMorador = moradores[0];
console.log(primeiroMorador); // {nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005}
console.log(primeiroMorador['andar']); // 10

let ultimoMorador = moradores[moradores.length - 1];
console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
console.log(ultimoMorador.nome); // Zoey
*/
/*
// Sexto Exemplo
let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3
    },
};

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.');

player.bestInTheWorld = ['2006', '2007', '2008', '2009', '2010', '2018'];

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes.');
console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.');
*/

/*
--------------------------------------------------
//FOR/IN e FOR/OF
// Pedidos de pizza
let pizzas = {
    sabor: 'Palmito',
    preco: 39.90,
    bordaCatupiry: true,
};

for (let key in pizzas) {
    console.log(pizzas[key]);
};

let pizzasDoces = ['chocolate', 'banana', 'morango'];

for (let key in pizzasDoces) {
    console.log(key, pizzasDoces[key]);
};
*/

//Mostrar as marcas de carros em uma Array
/*let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
    console.log(cars[index]);
}*/
/*
let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
};

for (let index in car) {
    console.log(index, car[index]);
};*/

/*
//ATENÇÃO!!! O for/of tem a mesma aplicação do for/in, mas com uma diferença crucial. O for/in percorre as propriedades dos objetos que forem enumeráveis com base na ordem de inserção, e não nos valores das propriedades, ou seja, ele retorna o índice. O for/in percorre a propriedade declarada e não o seu valor em si. Já o for/of percorre os elementos dos objetos iteráveis atravé dos seus respectivos valores, e não dos índices como o for/in. Segue exemplo
let food = ['hamburguer', 'bife', 'acarajé'];

//for/in
for (let position in food) {
    console.log(position);
  }; // Resultado será: 0, 1, 2;

//for/of
for (let value of food) {
    console.log(value);
  }; //resultado: hamburguer, bife, acarajé;
  */

// Para fixar 1 - Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.
/*let names = ['João', 'Maria', 'Jorge'];
for (let hello of names){
    console.log('Olá ' + hello);
};*/

// Para fixar 2 - Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.
/*let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

for (let key in car){
    console.log(key, car[key]);
};*/

function broken(num1, num2, operator){
    if (operator === '+') {
        return num1 + num2;
    }
    else if (operator === '-'){
        return num1 - num2;
    }
    else {
        return 'Operador incorreto';
    }
}
broken(5, 4, '+');

console.log(broken());    