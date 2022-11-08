// FUNCIONES
function greet(nombre) {
  console.log(`Hola ${nombre}`);
}
let firstName = `Random`;
greet(firstName);

// Funciones que retornan valores
function addTwoNumbers(n1 = 0, n2 = 0) {
  let suma = 0;

  suma = n1 + n2;

  return suma;
}

// Tarea

function substractTwoNumbers(n1 = 0, n2 = 0) {
  let resta = 0;

  resta = n1 - n2;

  return resta;
}

function timesTwoNumbers(n1 = 0, n2 = 0) {
  let producto = 0;

  producto = n1 * n2;

  return producto;
}

function divideTwoNumbers(n1 = 0, n2 = 0) {
  let cociente = 0;

  cociente = n1 / n2;

  return cociente;
}

let num1 = 10;
let num2 = 20;

let total = addTwoNumbers(num1, num2);
let resta = substractTwoNumbers(num1, num2);
let producto = timesTwoNumbers(num1, num2);
let cociente = divideTwoNumbers(num1, num2);

console.log(`Total: ${total}`);
console.log(`Resta: ${resta}`);
console.log(`Producto: ${producto}`);
console.log(`Cociente: ${cociente}`);

// Tarea 2: Tabla de multiplicar

function tableMultiplication(base = 0, limit = 0) {
  for (let i = 2; i <= limit; i++) {
    console.log(`El resultado de: ${base} x ${i} = ${base * i}`);
  }
}

tableMultiplication(5, 10);
