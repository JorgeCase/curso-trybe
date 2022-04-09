/*11. Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.*/

const salarioBruto = 3000;
let aliquotaInss = 0;
let valorIr = 0;

//Cálculo da alíquota de INSS que será aplicada
if (salarioBruto <= 1556.94) {
    aliquotaInss = salarioBruto * 0.08;
}else if (salarioBruto <= 2594.92) {
    aliquotaInss = salarioBruto * 0.09;
}else if (salarioBruto <= 5189.82) {
    aliquotaInss = salarioBruto * 0.11;
}else {
    aliquotaInss = 570.88;
}

const salarioBase = salarioBruto - aliquotaInss;

//Cálculo da dedução de IR
if (salarioBase <= 1903.98) {
    valorIr = 0;
}else if (salarioBase <= 2826.65) {
    valorIr = (salarioBase * 0.075) - 142.80;
}else if (salarioBase <= 3751.05) {
    valorIr = (salarioBase * 0.15) - 354.80;
}else if (salarioBase <= 4664.68) {
    valorIr = (salarioBase * 0.225) - 636.13;
}else {
    valorIr = (salarioBase * 0.275) - 869.36;
}

const salarioLiquido = salarioBase - valorIr;

let dinheiro = salarioLiquido.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

console.log('O salário bruto é de ' + (salarioBruto.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})));
console.log('Serão recolhidos ' + (aliquotaInss.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + ' pelo INSS.'))
console.log('Serão recolhidos ainda ' + (valorIr.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + ' pelo IR.'))
console.log('Resultando em um salário líquido de ' + (dinheiro.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})));