//  Crear una función que reciba 3 argumentos numéricos ( a, b, c), la función se debe de llamar max, la función debe de determinar cual es el mayor de los 3 y retornarlo… la función debe de trabajar así: let maxValue = max( 5, 2, 6); console.log( maxValue ); // 6

function max(a = 0, b = 0, c = 0) {
  let numbers = [a, b, c];
  let maxNumber = -99;

  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];

    if (number >= maxNumber) {
      maxNumber = number;
    }
  }
  return maxNumber;
}

let maxValue = max(1, 760, 4);

console.log(maxValue);
