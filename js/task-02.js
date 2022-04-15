const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
// Створить окремий елемент < li >.
//Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul.ingredients.

const cleateLi = ingredients.map((ingredient) => {
  const elementLi = document.createElement("li");
  elementLi.textContent = ingredient;
  elementLi.classList.add("item");
  return elementLi;
});

const ElemUl = document.querySelector("#ingredients");
ElemUl.append(...cleateLi);
