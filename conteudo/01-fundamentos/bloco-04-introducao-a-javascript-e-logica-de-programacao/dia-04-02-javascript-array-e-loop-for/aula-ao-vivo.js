//Conteúdo aula ao vivo
//Aplicação para gerar  e conferir jogo Mega-Sena

//Fazer o jogo
let jogo = [12, 23, 26, 41, 45, 51];


//Sorteio da loteria da Caixa
let numerosMegaSena = [7, 16, 44, 25, 45, 33];

//Conferir o resultado
//Estrutura do for => for(inicialização; condição; incremento/decremento)
let acertos = 0;

for(let index = 0; index < jogo.length; index++) {
    //console.log("Jogada " + jogo[index]);
    for (let index2 = 0; index2 < numerosMegaSena.length; index2++) {
        //console.log("Resultado " + numerosMegaSena[index2]);
        if(jogo[index] === numerosMegaSena[index2]) {
            acertos += 1;
        }
    }
}
//console.log(acertos);
//Se der bom, comemorar!

console.log(Math.floor(Math.random() * 60) + 1);