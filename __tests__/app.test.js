import { gameField, goblin, moveCharacter } from "../scr/js/app";

// Мокируем DOM, чтобы избежать реальной манипуляции с DOM в тестах
beforeEach(() => {
  document.body.innerHTML = `<div class="gameField"></div>`;
});

// Тестируем создание ячеек
test("should create 16 cells", () => {
  // Проверяем, что в gameField было добавлено 16 ячеек
  const cells = document.querySelectorAll(".cell");
  expect(cells.length).toBe(16);
});

// Тестируем, что гоблин появился в случайной ячейке
test("should place goblin in a random cell", () => {
  const cells = document.querySelectorAll(".cell");
  
  const goblinCell = Array.from(cells).find(cell => cell.contains(goblin));
  expect(goblinCell).not.toBeUndefined();
  expect(cells).toContain(goblinCell); // Гоблин должен быть в одной из клеток
});

// Тестируем движение персонажа
test("should move goblin to a new random cell", () => {
  const initialCell = Array.from(document.querySelectorAll(".cell")).find(cell => cell.contains(goblin));

  // Сохраняем текущий индекс ячейки с гоблином
  const initialIndex = initialCell.dataset.index;

  // Вызываем moveCharacter
  moveCharacter();

  const newCell = Array.from(document.querySelectorAll(".cell")).find(cell => cell.contains(goblin));

  // Убеждаемся, что гоблин переместился в другую ячейку
  expect(newCell).not.toBe(initialCell);
  expect(newCell.dataset.index).not.toBe(initialIndex);
});
