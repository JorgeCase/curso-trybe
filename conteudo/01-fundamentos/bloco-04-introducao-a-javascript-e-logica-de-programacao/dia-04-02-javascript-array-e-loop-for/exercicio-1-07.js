//5. Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let numbers = [5,9,3,19,70,8,100,2,35,27];

let minimo = numbers[0];

for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] < minimo) {
        minimo = numbers[index]
    }
}
console.log("O menor número é: " + minimo);