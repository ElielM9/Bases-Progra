//  ESTRUCTURAS DE CONTROL - CICLOS

// While
let gasTank = 50;

while (gasTank > 0) {
  console.log(`Gasolina restante`, gasTank);

  gasTank--;
}

// Do While
do {
  console.log(`Gasolina restante`, gasTank);

  gasTank--;
} while (gasTank > 0);

// For
for (let i = 1; i < 10; i++) {
  console.log(`El valor es:`, i);
}

// Tarea: Loops
let base = 10;
let limit = 50;

for (let i = 2; i <= limit; i++) {
  console.log( base, ` x `, i, ` = `, base * i);
}

let i = 2;
while (i <= limit) {
  console.log(`El resultado de`, base, ` x `, i, ` = `, base * i);
  i++;
}

do {
  console.log(`El resultado de`, base, ` x `, i, ` = `, base * i);
  i++;
} while (i < limit);
