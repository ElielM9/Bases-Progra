// CLASES
class Car {
  // Propiedades
  brand;
  doors;
  fuelTank;
  isRunning;
  type;

  createdAt;

  constructor(brand = ``, type = ``, doors = 0) {
    this.brand = brand;
    this.doors = doors;
    this.fuelTank = 0;
    this.isRunning = false;
    this.type = type;

    this.createdAt = 5345325;
  }

  // Metodos de clase
  turnOn() {
    if (this.isRunning) {
      console.log(`El coche está dañado`);
      return;
    }

    if (this.fuelTank <= 0) {
      console.log(`El carro no tiene energía`);
      return;
    }

    this.isRunning = true;
    console.log(`El coche está encendido`);
  }

  // Metodos con argumentos
  fillTank(gas = 0) {
    if (gas <= 0) {
      console.log(`La gasolina tiene que ser mayor a cero`);
      return;
    }
    let newFillTank = this.fuelTank + gas;

    if (newFillTank >= 100) {
      this.fuelTank = 100;
    } else {
      this.fuelTank = newFillTank;
    }
  }
}
let myCar = new Car(`Mazda`, `Hatchback`, 4);

myCar.turnOn();
myCar.fillTank(30);

console.log(myCar);
