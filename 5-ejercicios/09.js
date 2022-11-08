// Crear una función que reciba un arreglo como argumento, la función debe de retornar un nuevo arreglo pero filtrando todos los nombres que empiezan con una determinada letra.
/**
 Ejemplo:
let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];
let herosWithLetterS = heroesThatStartsWith( heroes, 'S' );
console.log( herosWithLetterS ); // She Hulk, Spiderman

 Tip: Para determinar si un string empieza con una letra
let hero = ‘Spiderman';
hero.startsWith(’S’); // true
Si se tiene un arreglo vació, por ejemplo:
let newHeroes = [];
Se puede insertar en el arreglo así:
newHeroes.push('Hulk');*/

function heroesThatStartsWith(nameList = ``, letter = "") {
  let newNameList = [];

  for (let i = 0; i < nameList.length; i++) {
    let hero = nameList[i];

    if (hero.startsWith(letter)) newNameList.push(hero);
  }

  return newNameList;
}

let heroes = [
  "Doom",
  "Dr. Strange",
  "Hulk",
  "She Hulk",
  "Spiderman",
  "Captain Marvel",
];

let herosWithLetterS = heroesThatStartsWith(heroes, "H");

console.log(herosWithLetterS);
