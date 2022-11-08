// Realizar un algoritmo que permita la impresión en consola de una tabla que vaya del 1 al 25.

for (let i = 1; i <= 5; i++) {
  let line = ``;
  
  for (let l = 1; l <= 5; l++) {
    line += ` ${ l * i } `;
  } 

  console.log(line);
}
