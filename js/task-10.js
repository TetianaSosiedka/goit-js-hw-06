function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// Створи функцію createBoxes(amount), яка приймає один параметр - число.
// Функція створює стільки < div >, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.
// Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.
const refs = {
  inputDataNumber: document.querySelector("#controls input"),
  buttonCreate: document.querySelector("#controls button[data-create]"),
  buttonDestroy: document.querySelector("#controls button[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

refs.buttonCreate.addEventListener("click", () => {
  const numberContainer = refs.inputDataNumber.value;
  createBoxes(numberContainer);
});
refs.buttonDestroy.addEventListener("click", destroyBoxes);

function createContainer(height, width) {
  const container = document.createElement("div");
  const colorContainer = getRandomHexColor();
  container.style.backgroundColor = colorContainer;
  container.style.height = height;
  container.style.width = width;
  refs.boxes.append(container);
}

let height = 30;
let width = 30;
function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    createContainer(`${height}px`, `${width}px`);
    height += 10;
    width += 10;
  }
}

function destroyBoxes() {
  refs.boxes.innerHTML = "";
  height = 30;
  width = 30;
}
