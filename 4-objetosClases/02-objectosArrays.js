`use strict`;
// ARREGLOS DE OBJETOS

let irene = {
  age: 32,
  name: `Irene`,
};

let minji = {
  age: 28,
  name: `Kim Min Ji`,
};

let dahyun = {
  age: 26,
  name: `Kim Dahyun`,
};

let people = { irene, minji, dahyun };

// console.log(people);

for (let i = 0; i < people.length; i++) {
  let person = people[i];

  console.log(person.name + ` ` + person.age);
}
