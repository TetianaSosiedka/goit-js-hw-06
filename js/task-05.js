// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
//     подставляет его текущее значение в span#name - output.
//     Если инпут пустой, в спане должна отображаться строка "Anonymous".
const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", setText);

function setText(event) {
  const text = event.currentTarget.value.trim();
  text !== ""
    ? (refs.output.textContent = text)
    : (refs.output.textContent = "Anonymous");
}
