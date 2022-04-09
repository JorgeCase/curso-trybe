/*10. Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
 - Atente que, sobre o custo do produto, incide um imposto de 20%.
 - Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
 - O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
     * valorCustoTotal = valorCusto + impostoSobreOCusto
     * lucro = valorVenda - valorCustoTotal (lucro de um produto)*/

 const custo = 100;
 const venda = 150;
 const aliquota = 0.2;

 if (custo < 0 || venda < 0 || aliquota < 0) {
     console.log('Erro - Os valores de entrada não podem ser menores do que (0) zero.');
 } else {
     console.log('A empresa lucrará R$ ' + (venda - (custo + (custo * aliquota))) + ' com a venda de 1.000 produtos.')
 }