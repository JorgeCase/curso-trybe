//Exemplo de uso do switch -- case

let trafficLight = 'azul';

switch (trafficLight) {
    case 'vermelho':
        console.log('pare');
        break;
    case 'amarelo':
        console.log('atenção');
        break;
    case 'verde':
        console.log('siga');
        break;
    default:
        console.log('valor não identificado');
}