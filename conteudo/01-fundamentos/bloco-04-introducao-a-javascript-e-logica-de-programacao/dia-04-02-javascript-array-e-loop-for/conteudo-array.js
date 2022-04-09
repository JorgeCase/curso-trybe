//Conteúdo do vídeo do GUS
let pizzas = ['4 Queijos', 'Frango com Catupiry', 'Marguerita', 'Palmito', 'Chocolate'];
//Dentro de um array os valores recebem um número de sua posição dentro da lista, sempre iniciando em 0.
/*pizzas[5] = 'Peito de Peru'; //forma para inserir mais valores na lista, tem que lembrar de informar a posição
pizzas.push('Peiro de Peru'); //dessa forma o push vai inserir o novo valor no final da lista
console.log(pizzas.length); //para ver o tamanho da array

console.log(pizzas.sort()); //coloca em ordem crescente (alfabética ou numérica)

console.log(pizzas[0]); //retorna o valor que esta na posição 0 na lista

//Laço de repetição
for (let index = 0; index < pizzas.length; index += 1) {
    console.log(pizzas[index]);
}*/

//Exemplos do conteúdo
/*let taskList = ['Tomar café', 'Reunião','Brincar com o cachorro'];
console.log(taskList.length);

taskList.push('Fazer exercícios da Trybe'); //adiciona mais uma tarefa ao final da lista
console.log(taskList);
taskList.unshift('Estudar mais'); //adiciona mais uma tarefa no início da lista
taskList.pop(); //remove a ultima tarefa da lista
taskList.shift(); //remove a primeira tafera da lista

console.log(taskList);
let searchForFirstTask = taskList[0];
console.log(searchForFirstTask);

let searchForLastTask = taskList[taskList.length - 1];
console.log(searchForLastTask);

let indexOfTask = taskList.indexOf('Reunião');
console.log(indexOfTask);*/

//Exercícios do conteúdo
//1. Obtenha o valor "Serviços" do array menu
/*let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuservices = menu[1];//.indexOf('Serviços');
console.log(menuservices);*/

//2. Procure o índice do valor "Portfólio" do array menu
/*let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortifolio = menu.indexOf('Portfólio');
console.log(indexOfPortifolio);*/

//3. Adicione o valor "Contato" no final do array menu
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push('Contato');
console.log(menu);