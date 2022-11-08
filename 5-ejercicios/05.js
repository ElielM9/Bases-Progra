// Dado el arreglo: let numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5 ]; Hacer una impresion en consola.
// 1 es un número impar
// 2 es un número par
// 3 es un número impar
// Utilizar un ciclo FOR para generar dicha impresión.
// Tip: usar el operador % para obtener el resultado, ejemplo: 2 % 2 = 0

let numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5];

for (let i = 0; i < numbers.length; i++) {
  let number = numbers[i];

  if (number % 2 === 0) {
    console.log(`El numero ${number} es par`);
  } else {
    console.log(`El numero ${number} es impar`);
  }
}
