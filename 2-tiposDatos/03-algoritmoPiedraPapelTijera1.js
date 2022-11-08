// Algoritmo de piedra, papel y tijera
function random(min, max) {
  return Math.floor(Math.random() * max - min + 1) + min;
}
function election(play) {
  let result = ``;

  switch (play) {
    case 1:
      result = `Piedra`;
      break;
    case 2:
      result = `Papel`;
      break;
    case 3:
      result = `Tijera`;
      break;
    default:
      result = `No es valido`;
  }

  return result;
}

let player = parseInt(prompt(`Elige 1 - Piedra, 2 - Papel o 3 - Tijera.`));
let pc = random(1, 3);

alert(`PC eligio:` + ` ` + election(pc));
alert(`Elegiste:` + ` ` + election(player));

// Combate
if (pc === player) {
  alert(`Empate`);
} else if (
  (player === 1 && pc === 3) ||
  (player === 2 && pc === 1) ||
  (player === 3 && pc === 2)
) {
  alert(`Ganaste`);
} else {
  alert(`Perdiste`);
}
