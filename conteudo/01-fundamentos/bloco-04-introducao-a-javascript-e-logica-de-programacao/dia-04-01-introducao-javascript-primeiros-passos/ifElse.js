//Comandos do vídeo
//if -> se
//else -> senão
/*
if (condicao) {
    //código
}
else is (outracCondicao) {
    //outra condicao
}
else {
    //condicao
}
*/
/*
let trybe = 19.40;

if (trybe >= 14 && trybe < 14.40) {
    console.log("Esquenta");
}
else if (trybe >= 16.30 && trybe < 17.50) {
    console.log("Aula ao vivo");
}
else if (trybe >= 19.40 && trybe < 20) {
    console.log("Fechamento");
}
else {
    console.log("Fora dos momentos síncronos");
}
*/

// Exercício proposto no tópico de if / else

const note = 42;

if (note >= 80) {
    console.log('Parabéns, você foi aprovada(o)!');
}
else if (note < 80 && note >= 60) {
    console.log('Você está na nossa lista de espera');
}
else /*if (note < 60)*/ {
    console.log('Você foi reprovada(o)');
}