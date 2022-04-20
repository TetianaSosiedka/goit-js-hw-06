function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль
// по кліку на button.change - color
//  і виводить значення кольору в span.color.

const refs = {
  body: document.querySelector("body"),
  spanColor: document.querySelector(".color"),
  button: document.querySelector(".change-color"),
};

refs.button.addEventListener("click", changeColor);

function changeColor() {
  const newColor = getRandomHexColor();
  refs.body.style.backgroundColor = newColor;
  refs.spanColor.textContent = newColor;
}
