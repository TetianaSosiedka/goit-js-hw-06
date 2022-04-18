// Создай переменную counterValue
//  в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const cunterDivElem = document.querySelector("#counter");
const decrementButton = cunterDivElem.querySelector(
  '[data-action="decrement"]'
);
const incrementButton = cunterDivElem.querySelector(
  '[data-action="increment"]'
);
const counterValueElement = cunterDivElem.querySelector("#value");

let counterValue = 0;
counterValueElement.textContent = counterValue;

decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  counterValueElement.textContent = counterValue;
  return counterValue;
});
incrementButton.addEventListener("click", () => {
  counterValue += 1;
  counterValueElement.textContent = counterValue;
  return counterValue;
});
