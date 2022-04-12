//Parte II - Funções
//1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
//Minha proposta de resolução
  
function palindromo(palavra) {
    let reverse = palavra.split('').reverse().join('');
    if (reverse === palavra) {
        return true;
    }else {
        return false;
    };
};
 
console.log(palindromo('A man, a plan, a canal. Panama'));

//Proposta encontrada em https://www.freecodecamp.org/portuguese/news/duas-maneiras-de-conferir-palindromos-em-javascript/
 
function palindrome(str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
}

console.log(palindrome("A man, a plan, a canal. Panama"));