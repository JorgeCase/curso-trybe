//Parte II - Funções
//7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word. Peguei a resolução do Course que apresentou duas formas de resolver o exercício.

function verificaFimPalavra(palavra, fimPalavra) {
    palavra = palavra.split('');
    fimPalavra = fimPalavra.split('');
    controle = true;
    for (let index = 0; index < fimPalavra.length; index += 1) {
        if (palavra[palavra.length - fimPalavra.length + index] != fimPalavra[index]) {
            controle = false;
        }
    }
    return controle;
};

//console.log(verificaFimPalavra('trybe', 'be')); //true
console.log(verificaFimPalavra('joaofernando', 'fernan')); //false

