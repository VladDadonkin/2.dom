import image from '../img/goblin.png';

const gameField = document.querySelector(".gameField");
const allCells = 16;

for (let i = 0; i < allCells; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  gameField.appendChild(cell);
  cell.dataset.index = i;
}

const goblin = document.createElement("img");
goblin.src =  image;
goblin.alt = "goblin";

let currentCellIndex = Math.floor(Math.random() * allCells);
const cells = document.querySelectorAll(".cell");
cells[currentCellIndex].appendChild(goblin);

function moveCharacter() {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * allCells);
  } while (newIndex === currentCellIndex);

  cells[newIndex].appendChild(goblin);
  currentCellIndex = newIndex;
}

setInterval(moveCharacter, 2000);
