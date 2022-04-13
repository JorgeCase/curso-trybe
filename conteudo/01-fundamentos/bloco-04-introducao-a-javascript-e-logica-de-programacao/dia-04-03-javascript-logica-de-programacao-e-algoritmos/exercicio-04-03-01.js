//1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero.

let fatorial = 1;
let valor = 10;
let soma = 0;

for (let index = valor; index > 0; index -= 1) {
    fatorial *= index;
};

console.log(fatorial);

const a = 3;
console.log(a);