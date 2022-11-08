// Piedra - Papel - Tijera
let player = 0;
let pc = 0;
let victories = 0;
let defeats = 0;
let ties = 0;

// Numero aleatorio del PC
function random(min, max) {
  return Math.floor(Math.random() * max - min + 1) + min;
}

//  Elección del jugador y Pc
function choice(play) {
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

// Combate
function combat() {

  if (pc === player) {
    resultCombat = `Empate`;
  } else if (
    (player === 1 && pc === 3) ||
    (player === 2 && pc === 1) ||
    (player === 3 && pc === 2)
  ) {
    resultCombat = `Ganaste`;
  } else {
    resultCombat = `Perdiste`;
  }

  return alert(resultCombat);
}

while (victories < 3 && defeats < 3 && ties < 3) {
  player = parseInt(prompt(`Elige 1 - Piedra, 2 - Papel o 3 - Tijera.`));
  pc = random(1, 3);

  alert(`PC eligio:` + ` ` + choice(pc));
  alert(`Elegiste:` + ` ` + choice(player));

  combat();

  if (resultCombat == `Ganaste`) {
    victories++;
  } else if (resultCombat == `Perdiste`) {
    defeats++;
  } else {
    ties++;
  }
}

alert(
  `Victorias:` +
    ` ` +
    victories +
    ` ` +
    `Derrotas:` +
    ` ` +
    defeats +
    ` ` +
    `Empates:` +
    ` ` +
    ties
);
