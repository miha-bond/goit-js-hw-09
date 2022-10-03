const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};
// +++++++++++++++++++++++++++++++++++
refs.startBtn.disabled = false;
refs.stopBtn.disabled = true;
let timerId = null;
refs.startBtn.addEventListener('click', evt => {
  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;
  timerId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 500);
});

refs.stopBtn.addEventListener('click', () => {
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;
  clearInterval(timerId);
});
// -----------------------------------
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// ------------------------------------

// -----------------------------------------------------------
// ===========================================================
//todo Завдання 1 - перемикач кольорів
//? Виконуй це завдання у файлах 01-color-switcher.html і 01-color-switcher.js. Подивися демо-відео роботи перемикача.
//
// HTML містить кнопки «Start» і «Stop».
//
//* <button type="button" data-start>Start</button>
//* <button type="button" data-stop>Stop</button>
//
//? Напиши скрипт, який після натискання кнопки «Start», раз на секунду змінює колір фону <body> на випадкове значення, використовуючи інлайн стиль. Натисканням на кнопку «Stop» зміна кольору фону повинна зупинятися.
//
//! УВАГА
//? Враховуй, що на кнопку «Start» можна натиснути нескінченну кількість разів. Зроби так, щоб доки зміна теми запущена, кнопка «Start» була неактивною (disabled).
//
//! Для генерування випадкового кольору використовуй функцію getRandomHexColor.
//* function getRandomHexColor() {
//*  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//* }
//
