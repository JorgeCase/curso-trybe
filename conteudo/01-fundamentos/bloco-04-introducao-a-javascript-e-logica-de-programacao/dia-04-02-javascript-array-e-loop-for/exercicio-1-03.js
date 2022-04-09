//3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
let numbers = [5,9,3,19,70,8,100,2,35,27];
let soma = 0;

//somando os valores
for (let index = 0; index < numbers.length; index++) {
    soma += numbers[index];
}
console.log(soma);

//contando o número de elemtentos na array
let quantidade = numbers.length
console.log(quantidade);

//calculando média aritmética
let media = (soma / quantidade);

console.log(media);