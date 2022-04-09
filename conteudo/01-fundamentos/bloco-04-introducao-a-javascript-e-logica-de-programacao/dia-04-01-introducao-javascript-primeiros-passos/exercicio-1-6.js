/*6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
 - Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
 - Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
 - Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
 - Exemplo: bishop (bispo) -> diagonals (diagonais)*/

 const pecaxadrez = 'REI';

 const minpecaxadrez = pecaxadrez.toLowerCase();
 switch (pecaxadrez.toLowerCase()) {
    case 'rei':
        console.log('O Rei se movimenta uma casa apenas, em qualquer direção.');
        break;
    case 'rainha':
        console,log('A Rainha se movimenta na diagonal, horizontal e vertical.');
        break;
    case 'bispo':
        console.log('O Bispo se move na diagonal.');
        break;
    case 'torre':
        console.log('A Torre se move na horizontal e vertical.');
        break;
    case 'cavalo':
        console.log('O Cavalo se move em "L" e pode pular sobre as peças.');
        break;
    case 'peão':
        console.log('O Peão se movimenta apenas para a frente, no primeiro movimento podem ser duas casas.');
        break;
    default:
        console.log('Erro, peça inválida.');
        break;
 };
