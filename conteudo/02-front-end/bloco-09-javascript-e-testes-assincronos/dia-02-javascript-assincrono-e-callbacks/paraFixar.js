// Para fixar
/* Responda às perguntas a seguir para ter certeza de que você entendeu os textos. Discuta a resposta com o restante da turma (que tal uma pessoa abrir uma conversa no Slack para conversarem a respeito?!). Se bater alguma dúvida, volte aos textos! */

/* 1 - O que é um código que é executado de modo assíncrono? Qual é a diferença disso para um código que é executado de modo síncrono? */

/* Um código assíncrono é um código que não "trava a fila de execução. Ou seja, a proxima instrução não espera o fim da instrução assíncrona para iniciar, diferentemente do código síncrono, que a próxima instrução só inicia ao final da anterior." */

/* 2 - Quando você tem que enfileirar várias callbacks, que problema surge? */

/* Surge o "callback hell", que nada mais é que uma sequência de callbacks uma dentro da outra, o que dificulta a leitura e escalabilidade do código.  */

/* 3 - Por que as Promises são uma forma de resolver esse problema? */

/* As Promises permitem que um fluxo de ações assíncronas seja escrito de forma similar a um fluxo de ações síncronas, garantindo também formas concisas e centralizadas de capturar possíveis erros durante sua execução. */

/* 4 - Quando você vai se comunicar com uma API, tal comunicação deve ser síncrona ou assíncrona? Lembre-se de que o serviço ao qual você está se conectando pode demorar muito ou pouco para dar retorno, pode estar fora do ar etc. */

/* Assíncrona, porque não se tem controle do tempo e da integridade da resposta da API. */

/* 5 - Dada a resposta anterior, o que é fetch e para que ele serve? */

/* Fetch é uma função que faz uma requisição à API, ela tem ferramentas para tratar os dados recebidos, tanto no sucesso quanto no erro. */