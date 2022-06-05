/* 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com. */

/* const employeeGenerator = (fullName) => {
    const email = fullName.toLowerCase().split(' ').join('_');
    return { fullName, email: `${email}@trybe.com` };
};

const newEmployees = (callback) => {
    const employees = {
        id1: callback('Pedro Guerra'),
        id2: callback('Luiza Drumond'),
        id3: callback('Carla Paiva'),
    };
    return employees;
};

console.log(newEmployees(employeeGenerator));
 */
/* 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou"). */

/* const compareNumber = (myNumber, number) => myNumber === number;

const result = (myNumber, callback) => {
    const number = Math.floor((Math.random() * 5) + 1);
    return callback(myNumber, number) ? 'Parabéns você ganhou' : 'Tente novamente';
};

console.log(result(1, compareNumber));
 */
/* 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem. */

/* const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const compareAnswers = (rightAnswers, studentAnswers) => {
    if (rightAnswers === studentAnswers) {
        return 1;
    } if (studentAnswers === 'N.A') {
        return 0;
    }
    return -0.5;
};

const countPoints = (rightAnswers, studentAnswers, action) => {
    let counter = 0;
    for (let index = 0; index < rightAnswers.length; index += 1) {
        const actionReturn = action(rightAnswers[index], studentAnswers[index]);
        counter += actionReturn;
    }
    return `Resultado final: ${counter} pontos`;
};

console.log(countPoints(rightAnswers, studentAnswers, compareAnswers));
 */
/* BÔNUS */

const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

/* PARTE I */  
/* 1 - Crie uma função que retorna o dano do dragão.
O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo). */

const dragonAttack = (dragon) => {
    const minDmg = 15;
    const maxDmg = dragon.strength;
    const dragonDmg = Math.floor(Math.random() * (maxDmg - minDmg + 1)) + minDmg;
    return dragonDmg;
};

/* 2 - Crie uma função que retorna o dano causado pelo warrior.
O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo). */

const warriorAttack = () => {
    const minDmg = warrior.strength;
    const maxDmg = minDmg * warrior.weaponDmg;
    const warriorDamage = Math.floor(Math.random() * (maxDmg - minDmg + 1)) + minDmg;
    return warriorDamage;
};

/* 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0. */

const mageAttack = (mage) => {
    const mageMana = mage.mana;
    const minDmg = mage.intelligence;
    const maxDmg = minDmg * 2;
    const turnStats = {
        manaSpent: 0,
        damageDealt: 'Não possui mana suficiente'
    };

    if (mageMana > 15) {
        const mageDamage = Math.floor((Math.random() * (maxDmg - minDmg + 1)) + minDmg);
        turnStats.manaSpent = 15;
        turnStats.damageDealt = mageDamage;
        return turnStats;
    }
    return turnStats;
};

/* PARTE II */
/* Agora que você já possui a implementação das funções relativas aos três exercícios anteriores, passe-as como parâmetro para outras funções que irão compor um objeto gameActions. O objeto será composto por ações do jogo e cada ação é por denifição uma HOF, pois neste caso, são funções que recebem como parâmetro outra função. */

const gameActions = {
    /* 1 - Crie a primeira HOF que compõe o objeto gameActions. Ela será a função que simula o turno do personagem warrior. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon. Além disto ela também deve atualizar o valor da chave damage do warrior. */
    warriorTurn: (warriorAttack) => {
        const warriorDamage = warriorAttack(warrior);
        warrior.damage = warriorDamage;
        dragon.healthPoints -= warriorDamage;
    },
    /* 2 - Crie a segunda HOF que compõe o objeto gameActions. Ela será a função que simula o turno do personagem mage. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon. Além disto ela também deve atualizar o valor das chaves damage e mana do mage. */
    mageTurn: (mageAttack) => {
        const mageTurnStats = mageAttack(mage);
        const mageDamage = mageTurnStats.damageDealt;
        mage.mana -= mageTurnStats.manaSpent;
        dragon.healthPoints -= mageDamage;
    },
    /* 3 - Crie a terceira HOF que compõe o objeto gameActions. Ela será a função que simula o turno do monstro dragon. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo monstro dragon e atualizará os healthPoints dos personagens mage e warrior. Além disto ela também deve atualizar o valor da chave damage do monstro. */
    dragonTurn: (dragonAttack) => {
        const dragonDamage = dragonAttack(dragon);
        mage.healthPoints -= dragonDamage;
        warrior.healthPoints -= dragonDamage;
        dragon.damage = dragonDamage;
    },
    /* 4 - Adicione ao objeto gameActions uma função que retorne o objeto battleMembers atualizado e faça um console.log para visualizar o resultado final do turno. */
    turnResults: () => battleMembers,
  };

  gameActions.warriorTurn(warriorAttack);
  gameActions.mageTurn(mageAttack);
  gameActions.dragonTurn(dragonAttack);
  console.log(gameActions.turnResults());