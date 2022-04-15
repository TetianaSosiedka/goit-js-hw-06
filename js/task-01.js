// 1. Порахує і виведе в консоль кількість категорій в ul#categories,
// тобто елементів li.item.
const ulCategoris = document.querySelector("#categories");
const childrenUlCategoris = ulCategoris.children;
const numberChildrenUlCategoris = childrenUlCategoris.length;
console.log("Number of categories: ", numberChildrenUlCategoris);

// 2. Для кожного элемента li.item у спику ul#categories,
// знайде і виведе в консоль текст заголовку елемента(тегу < h2 >)
// і кількість елементів в категорії(усіх < li >, вкладених в нього).
const liEl = document.querySelectorAll(".item");

const ChildLiEl = [...liEl].map((elem) => {
  const titleEl = elem.firstElementChild;
  const TextTitleEl = titleEl.textContent;
  console.log("Category: ", TextTitleEl);

  const arreyLiEl = elem.querySelectorAll("li");
  const numberLiEl = arreyLiEl.length;
  console.log("Elements: ", numberLiEl);
  console.log("");
});
