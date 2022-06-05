/* setTimeout(() => {
    console.log('Comprar parafusos') // comprar parafusos
    console.log('Adicionar ao estoque') // adicionar ao estoque
}, 2000);

console.log('1 - Receber roda'); // 1 - receber roda
console.log('2 - Encaixar parafusos'); // 2 - Encaixar parafusos
console.log('3 - Fixar roda no carro'); // 3 - fixar roda no carro */

// -------------------------------------------------------------

/* const pushNumber = (list, number) => list.push(number);

let numbers = [];

// pushNumber(numbers, 1);
setTimeout(() => pushNumber(numbers, 1), 3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

// console.log(numbers);
setTimeout(() => console.log(numbers), 3000); */

// -------------------------------------------------------------

/* // Declaramos nossa variável de despesas
const despesas = [
    {
        gym: 99,
    },
    {
        ifood: 200,
    },
    {
        phone: 60,
    },
    {
        internet: 100,
    },
];

// Declaramos a nossa renda
const renda = 1000;

const despesaMensal = (renda, despesas, callback) => {
// Definimos que a despesa total é igual ao valor retornado pela função callback (que é o parâmetro da nossa função)
// que vai receber nosso parâmetro /variável "despesas"
    const despesaTotal = callback(despesas); // Definimos noss saldo final, que nossa renda - nossa despesa total
    const saldoFinal = renda - despesaTotal;

    console.log(`Balanço do mês:
        Recebido: R$ ${renda},00
        Gasto: R$ ${despesaTotal},00
        Saldo: R$ ${saldoFinal},00 `);
};

// Definimos nossa função que será passada como parâmetro
// essa função recebe o parâmetro despesas a partir da função principal despesaMensal
const somaDespesas = (despesas) => {
    // Separamos cada item do noss array de despesas e fazemos um reduce para somar os valores
    const custoItem = despesas.map((item) => Object.values(item));
    const despesaTotal = custoItem.reduce((acc, curr) => acc += curr[0], 0);
    return despesaTotal;
};

//Executamos a função principal com as variáveis renda, despesas e a nossa função somaDespesas
// callback = somaDespesas
despesaMensal(renda, despesas, somaDespesas); */

// -------------------------------------------------------------

/* 1 - Adicione uma callback como parâmetro da função getUser.
No código abaixo você tem a função getUser, que define um objeto com os dados de uma pessoa. Complete a função getUser de forma que ela receba uma função callback como parâmetro para realizar as operações abaixo:
Insira o retorno da função getUser;
Complete a chamada da função getUser de modo que o retorno seja: "Hello! My name is Ivan Ivanovich";
Complete a chamada da função getUser de modo que o retorno seja: "Ivan is Russian". */
// Definição da função userFullName
/* const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

// Definição da função getUser
const getUser = (callback) => {
    const userToReturn = {
        firstName: 'Ivan',
        lastName: 'Ivanovich',
        nationality: 'Russian'
    };
    // Retornamos noss parâmetro, que será uma função (callback)
    return callback(userToReturn);
};

// Chamada/execução da função getUser, que vai receber como parâmetro nossa função userFullName.
console.log(getUser(userFullName));
console.log(getUser(userNationality)); */

// -------------------------------------------------------------

/* 2 - Passe, como parâmetro e como retorno, uma callback para a função getUser.
No código abaixo você tem a função getUser modificada, que agora funciona de modo assíncrono e imprime dados de uma pessoa depois de um certo tempo. Complete a função getUser de forma que ela receba uma callback como parâmetro e a retorne para que possa realizar as operações abaixo sobre a pessoa:
Insira uma callback como parâmetro da função getUser;
Retorne a callback passada como parâmetro na função getUser; */

/* const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser = (callback) => {
  setTimeout(() => {
    const user = {
      firstName: "Ivan",
      lastName: "Ivanovich",
      nationality: "Russian",
    };
    // Retorne a `callback` passada como parâmetro na função `getUser`
    // Dica: você pode manter o `console.log()`
    console.log(callback(user));
  }, delay());
};

getUser(userFullName); // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo
getUser(userNationality); // deve imprimir "Ivan is Russian" depois de um certo tempo */

// -------------------------------------------------------------

/* 1 - Adicione uma callback e trate o erro retornado.
A função getCountry abaixo tem aproximadamente 50% de chance em obter, com sucesso, um país. Ela utiliza uma callback para poder realizar qualquer operação sobre o país retornado.
Adicione um segundo parâmetro, que deve ser uma callback, na função getCountry;
Retorne essa callback na função getCountry de forma que trate a mensagem de erro. */

/* const countryName = ({ name }) => console.log(`Returned country is ${name}`);
const countryCurrency = ({ name, currency }) => console.log(`${name}'s currency is the ${currency}`);

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const printErrorMessage = (error) => console.log(`Error getting country: ${error}`);

const getCountry = (onSuccess, onError) => {
  setTimeout(() => {
    const didOperationSucceed = Math.random() >= 0.5;
    if(didOperationSucceed) {
      const country = {
        name: "Brazil",
        hdi: 0.759,
        currency: "Real",
      };
      onSuccess(country);
    } else {
      const errorMessage = "Country could not be found";
      onError(errorMessage);
    }
  }, delay());
};

// Deve imprimir "Returned country is Brazil" no sucesso ou "Error getting country: Country could not be found" em caso de falha
getCountry(countryName, printErrorMessage);

// Deve imprimir "Brazil's currency is the Real" no sucesso, ou "Error getting country: Country could not be found" em caso de falha
getCountry(countryCurrency, printErrorMessage); */

// -------------------------------------------------------------

