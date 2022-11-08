// OBJETOS 

// Forma de crear un objeto
let carro = {
  color: `Blanco`,
  traction: `4X4`,
  ruedas: 4,
  puertas: 5,
  marca: `Nissan`,
};

// Usar variables dentro del objeto.
carro.color;

if (carro.puertas === 5) {
  console.log(`Esto es una SUV`);
} else {
  console.log(`Esto es una PickUp`);
}

// OBJETOS LITERALES
let person = {
  name: `Irene`,
  age: 32,
  isActive: false,
  hobbies: [`Music`, `Reading`],
  toString() {
    let objectMessage = this.name + ` ` + this.age;
    console.log(objectMessage);
  },
};

// console.log(person.toString());

// Ejercicio de objetos

let car = {
  brand: `Subaru`,
  model: `BRZ`,
  doors: 2,
  asientos: 4,
  color: `Azul`,
  manual: false,
};
let smarTv = {
  sizeInch: 55,
  brand: `Sony`,
  year: 2022,
};
let youTubeVideo = {
  likes: 135,
  dislikes: 2,
  views: 2444,
  title: `Titulo`,
};

console.log(car);
console.log(smarTv);
console.log(youTubeVideo);
