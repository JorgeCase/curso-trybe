//Parte II - Funções

//3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function indiceMenor(numeros) {
    let indiceMenor = 0;
    for (let indice in numeros) {
        if (numeros[indice] < numeros[indiceMenor]) {
            indiceMenor = indice;
        }
    }
    return indiceMenor;
};

console.log(indiceMenor([2, 4, 6, 7, 10, 0, -3]));