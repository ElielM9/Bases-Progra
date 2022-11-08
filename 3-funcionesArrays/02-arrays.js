// ARREGLOS
let flowers = [`Rosas`, `Tulipanes`, `Girasoles`];

// if (flowers[3]) {
//   console.log(flowers[3]);
// }

for (let i = 0; i <= flowers.length; i++) {
  console.log(flowers[i]);
}

// Tarea: Imprimir em consola usando un for el salario de cada empleado.
let employes = [`Melissa`, `Janeth`, `Paulina`, `Micol`];
let salaries = [1500, 2400, 3425, 1250];

for (let i = 0; i < salaries.length; i++) {
  let employe = employes[i];
  let salary = salaries[i];

  console.log(`El salario de ${employe} es de ${salary}`);
}
