// Primeros programas
let a = 12;
let b = 35;
let c = a * b;

console.log(`El resultado de la operación es ${c}`);

// Hola Mundo
let hello = "Hola";
// let name = prompt("Ingresa tu nombre");

let helloPerson = hello + " " + name;

// alert(helloPerson);

//  Programa secuencial
let numberOfLines = 0;
console.log(`El número es ${numberOfLines}`);


numberOfLines = numberOfLines + 1;
console.log(`El número es ${numberOfLines}`);

numberOfLines = numberOfLines + 1;
console.log(`El número es ${numberOfLines}`);

// Intro a Funciones

function increaseLineNumber() {
  //   numberOfLines++;
  //   numberOfLines = numberOfLines + 1;
  numberOfLines += 1;
  console.log(`El número es ${numberOfLines}`);
}

increaseLineNumber();
increaseLineNumber();
increaseLineNumber();
increaseLineNumber();



