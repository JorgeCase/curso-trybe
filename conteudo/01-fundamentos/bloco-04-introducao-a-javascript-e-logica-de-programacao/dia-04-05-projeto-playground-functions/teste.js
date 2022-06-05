function generatePhoneNumber(arr) {
    // seu código aqui
    let phoneNumber = '';
    let count = 0;
    
    //Verificando tamanho do array
    if (arr.length !== 11) {
      phoneNumber = 'Array com tamanho incorreto.';
      return phoneNumber;
    }
    //verifica se é maior que 9 ou menor que 0
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] < 0 || arr[i] > 9) {
        phoneNumber =
          'não é possível gerar um número de telefone com esses valores';
        return phoneNumber;
      }
      count = 1;
      for (let j = i + 1; j < arr.length; j += 1) {
        if (arr[j] === arr[i]) {
          count += 1;
        }
        if (count >= 3) {
          phoneNumber =
            'não é possível gerar um número de telefone com esses valores';
          return phoneNumber;
        }
      }
      if (i === 0) {
        phoneNumber += `(${arr[i]}`;
      } else if (i === 1) {
        phoneNumber += `${arr[i]}) `;
      } else if (i === 7) {
        phoneNumber += `-${arr[i]}`;
      } else {
        phoneNumber += arr[i];
      }
    }
    return phoneNumber;
  }
  console.log(generatePhoneNumber([1, 2, 3, 4, 1, 6, 7, 8, 9, 0, 1]));