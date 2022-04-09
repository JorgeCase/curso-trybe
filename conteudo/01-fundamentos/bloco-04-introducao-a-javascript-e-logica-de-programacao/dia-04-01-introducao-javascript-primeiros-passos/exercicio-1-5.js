//5. Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

const a5 = 60;
const b5 = 60;
const c5 = 60;

let somaDosAngulos = a5 + b5 + c5;
let angulosPositivos = a5 > 0 && b5 > 0 && c5 > 0;

if (angulosPositivos) {
    if (somaDosAngulos === 180) {
        console.log(true + ": Os valores dos ângulos representam um triângulo");
    } else {
        console.log(false + ": Os valores dos ângulos não representam um triângulo")
    };
} else {
    console.log("Erro: algum ângulo é inválido");
}