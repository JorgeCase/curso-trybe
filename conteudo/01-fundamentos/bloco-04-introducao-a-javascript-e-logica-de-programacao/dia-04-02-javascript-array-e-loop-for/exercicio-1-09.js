//9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

let numbers = [];
const size = 25;
let divisao = [];

for (index = 1; index <= size; index += 1) {
    numbers.push(index);
}

console.log(numbers);

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index] / 2);
}