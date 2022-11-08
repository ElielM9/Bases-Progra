// Dado el arreglo: let numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5 ];
// Utilizando un ciclo FOR, barra todo el arreglo y determine ¿Cuál es el número mayor?
let numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5, 25];
let maxNumber = -9999;

for (let i = 0; i < numbers.length; i++) {
  let number = numbers[i];
  
  if (number >= maxNumber) {
    maxNumber = number;
  }

}

console.log(`El numero mayor es ${maxNumber}`);
