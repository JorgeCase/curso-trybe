/* 1 - Dado o código abaixo, qual a ordem de finalização de execução das linhas comentadas? */

const planetDistanceFromSum = ({ name, distanceFromSum: { value, measurementUnit } }) =>
    `${name} is ${value} ${measurementUnit} apart from the Sum`;

const mars = {
    name: 'Mars',
    distanceFromSum: {
        value: 227900000,
        measurementUnit: 'kilometers',
    },
};

const venus = {
    name: 'Venus',
    distanceFromSum: {
        value: 108200000,
        measurementUnit: 'kilometers',
    },
};

const jupiter = {
    name:'Jupiter',
    distanceFromSum: {
        value: 778500000,
        measurementUnit: 'kilometers',
    },
};

console.log(planetDistanceFromSum(mars)); // Primeiro
console.log(planetDistanceFromSum(venus)); // Segundo
console.log(planetDistanceFromSum(jupiter)); // Terceiro

