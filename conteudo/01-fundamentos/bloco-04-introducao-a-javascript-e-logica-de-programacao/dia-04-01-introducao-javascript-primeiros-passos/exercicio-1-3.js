//3. Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const a3 = 12;
const b3 = 8;
const c3 = 4;

if (a3 > b3 && a3> c3) {
    console.log("O maior número é: " + a3);
}
else if (b3 > a3 && b3 > c3) {
    console.log("O maior número é: " + b3);
}
else if (c3 > a3 && c3> b3) {
    console.log("O maior número é: " + c3);
} else {
    console.log("Os números são iguais");
}