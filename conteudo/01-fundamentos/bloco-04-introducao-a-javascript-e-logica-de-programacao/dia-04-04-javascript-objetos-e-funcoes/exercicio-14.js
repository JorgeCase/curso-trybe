//Parte II - Funções
//6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N. Peguei a resolução do Course
 
function somaTodosNumeros(numeros) {
    let total = 0;
    for (let index = 1; index <= numeros; index += 1) {
        total = total + index;
    }
    return total;
};
console.log(somaTodosNumeros(5));