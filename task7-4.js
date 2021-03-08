// Задание 4
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
// {
//   /* <div id="counter">
//   <button type="button" data-action="decrement">
//     -1
//   </button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">
//     +1
//   </button>
// </div>; */
// }

const counterValue = document.querySelector("#value");

let value = counterValue.textContent;
const incBtnRef = document.querySelector("[data-action = increment]");
const decBtnRef = document.querySelector("[data-action = decrement]");

incBtnRef.addEventListener("click", () => {
  value++;
  console.log(value);
});

decBtnRef.addEventListener("click", () => {
  value--;
  console.log(value);
});
