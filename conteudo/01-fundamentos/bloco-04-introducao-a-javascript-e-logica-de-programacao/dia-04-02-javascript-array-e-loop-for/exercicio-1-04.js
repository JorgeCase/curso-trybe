//4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

let numbers = [5,9,3,19,70,8,100,2,35,27];
let soma = 0;

//somando os valores
for (let index = 0; index < numbers.length; index++) {
    soma += numbers[index];
}
console.log('O somatório resultou no valor: ' + soma);

//contando o número de elemtentos na array
let quantidade = numbers.length
console.log("Foram digitados: " + quantidade + " números");

//calculando média aritmética
let media = (soma / quantidade);

console.log('A média aritmética é: ' + media);

if (media > 20) {
    console.log('Valor maior que 20.');
} else {
    console.log('Valor menor ou igual a 20.');
}
