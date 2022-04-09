/*Operadores lógicos:
&& -> "AND"
|| -. "OR"
! -> "NOT"*/

//Exemplo de uso do &&
/*const comida = 'pão na chapa';
const bebida = 'cafézinho';

if (bebida === 'cafézinho' && comida === 'pão na chapa') {
    console.log('Muito obrigado pela refeição :)');
} 
else {
    console.log('Acho que houve um engano com meu pedido');
}
//Outro exemplo de &&
const conditionOne = true;
const conditionTwo = false;
console.log(conditionOne && conditionTwo);
*/
//Exercício do tópico
const currentHour = 21;
let message = '';

if (currentHour >= 22) {
    message = 'Não deveríamos comer nada, é hora de dormir';
}
else if (currentHour >= 18 && currentHour < 22) {
    message = 'Rango da noite, vamos jantar :D';
}
else if (currentHour >= 14 && currentHour < 18) {
    message = 'Vamos fazer um bolo pro café da tarde?';
}
else if (currentHour >= 11 && currentHour < 14) {
    message = 'Hora do almoço!!!';
}
else if (currentHour >= 4 && currentHour < 11) { 
    message = 'Hmmm, cheiro de café recém passado';
};

console.log(message);

//Exemplo de uso do ||
const bebidaPrincipal = 'pão na chapa';
const bebidaAlternativa = 'cafézinho';

if (bebidaAlternativa === 'cafézinho' || bebidaPrincipal === 'pão na chapa') {
    console.log('Muito obrigado pela refeição :)');
} 
else {
    console.log('Acho que houve um engano com meu pedido');
}

//Exemplo de uso do OR
let weekDay = 'quarta-feira';

if (weekDay == 'segunda-feira' || weekDay == 'terca-feira' || weekDay == 'quarta-feira' || weekDay == 'quinta-feira' || weekDay == 'sexta-feira') {
    console.log('Oba, mais um dia de aprendizado na Trybe');
}
else {
    console.log('FINALMENTE, descanso merecido UwU');
}