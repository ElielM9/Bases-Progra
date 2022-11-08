// ESTRUCTURAS DE CONTROL - DECISIONES

// If - Si
let isTired = true;

if (isTired) {
  console.log(`Tomar café`);
}

if (!isTired) {
  console.log(`Tomar agua`);
}

// If else - Sino
if (isTired) {
  console.log(`Tomar café`);
} else {
  console.log(`Tomar agua`);
}

// If else anidado
let note = 90;

if (note >= 70) {
  console.log(`El alumno aprueba la clase`);
} else if (note > 60) {
  console.log(`Por favor estudie más`);
} else {
  console.log(`El alumno no aprueba`);
}

// Tarea: Realizar un programa que muestre la nota del alumno como: A, B, C, D, F. Donde:
// A >= 90
// B >= 80
// C >= 70
// D >= 60
// F < 60

let grade = 90;

if (grade >= 90) {
  console.log(`El alumno sacó: A`);
} else if (grade >= 80) {
  console.log(`El alumno sacó: B`);
} else if (grade >= 70) {
  console.log(`El alumno sacó: C`);
} else if (grade >= 60) {
  console.log(`El alumno sacó: D`);
} else if (grade < 60) {
  console.log(`El alumno sacó: F`);
}

// Switch
let weekDay = 5; // 1 - Lunes, 2 - Martes, 3 - Miercoles...

if (weekDay <= 0) {
  throw new Error(`Valor invalido`);
}

switch (weekDay) {
  case 1:
    console.log(`Hoy es lunes`);
    break;
  case 2:
    console.log(`Hoy es martes`);
    break;
  case 3:
    console.log(`Hoy es miercoles`);
    break;
  default:
    console.log(`No es lunes, martes o miercoles`);
}

