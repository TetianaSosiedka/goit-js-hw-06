// Напиши скрипт, который при потере фокуса на инпуте(событие blur),
//     проверяет его содержимое на правильное количество введённых
//символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным,
//     если неправильное - красным.
// Для добавления стилей, используй CSS - классы valid и invalid,
//     которые мы уже добавили в исходные файлы задания.
const input = document.querySelector("#validation-input");

const inputLength = input.dataset.length;

input.addEventListener("blur", checkLengsInputValue);
input.addEventListener("focus", removeClass);

function removeClass() {
  if (input.classList.contains("valid")) {
    input.classList.remove("valid");
  }
  if (input.classList.contains("invalid")) {
    input.classList.remove("invalid");
  }
}

function checkLengsInputValue(event) {
  const string = event.currentTarget.value;
  if (string.length === Number(inputLength)) {
    input.classList.add("valid");
  } else input.classList.add("invalid");
}
