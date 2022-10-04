import { Notify } from 'notiflix/build/notiflix-notify-aio';
const refs = {
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
  btnSubmit: document.querySelector('.form'),
};
// ++++++++++++++++++++++++++++++++++++++++++
function createPromise(i, delayValue) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    const intervalId = setTimeout(() => {
      if (shouldResolve) {
        resolve({ i, delayValue });
      } else {
        reject({ i, delayValue });
      }
    }, delayValue);
  });
}
// ---------------------------------------------
refs.btnSubmit.addEventListener('submit', evt => {
  evt.preventDefault();
  let delayValue = Number(refs.delay.value);
  let stepValue = Number(refs.step.value);
  let amountValue = Number(refs.amount.value);

  for (let i = 1; i <= amountValue; i += 1) {
    createPromise(i, delayValue)
      .then(({ i, delayValue }) => {
        return Notify.success(`Fulfilled promise ${i} in ${delayValue}ms`);
      })
      .catch(({ i, delayValue }) => {
        return Notify.failure(`Rejected promise ${i} in ${delayValue}ms`);
      });
    delayValue += stepValue;
  }
});

// -------------------------------------------
// ===========================================

//todo Завдання 3 - генератор промісів
//? Виконуй це завдання у файлах 03-promises.html і 03-promises.js. Подивися демо-відео роботи генератора промісів.
//
// HTML містить розмітку форми, в поля якої користувач буде вводити першу затримку в мілісекундах, крок збільшення затримки для кожного промісу після першого і кількість промісів, яку необхідно створити.
//
//*      <form class="form">
//*        <label>
//*         First delay (ms)
//*         <input type="number" name="delay" required />
//*        </label>
//*        <label>
//*         Delay step (ms)
//*         <input type="number" name="step" required />
//*        </label>
//*        <label>
//*         Amount
//*         <input type="number" name="amount" required />
//*       </label>
//*       <button type="submit">Create promises</button>
//*      </form>
//
//? Напиши скрипт, який на момент сабміту форми викликає функцію createPromise(position, delay) стільки разів, скільки ввели в поле amount. Під час кожного виклику передай їй номер промісу (position), що створюється, і затримку, враховуючи першу затримку (delay), введену користувачем, і крок (step).
//
//*      function createPromise(position, delay) {
//*        const shouldResolve = Math.random() > 0.3;
//*        if (shouldResolve) {
//*                Fulfill;
//*        } else {
//*               Reject;
//*        }
//*      }
//
//? Доповни код функції createPromise таким чином, щоб вона повертала один проміс, який виконується або відхиляється через delay часу. Значенням промісу повинен бути об'єкт, в якому будуть властивості position і delay зі значеннями однойменних параметрів. Використовуй початковий код функції для вибору того, що потрібно зробити з промісом - виконати або відхилити.
//
//*      createPromise(2, 1500)
//*      .then(({ position, delay }) => {
//*         console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//*      })
//*      .catch(({ position, delay }) => {
//*         console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//*      });
//
//! Бібліотека повідомлень
//! УВАГА
//? Наступний функціонал не обов'язковий для здавання завдання, але буде хорошою додатковою практикою.
//
//? Для відображення повідомлень користувачеві, замість console.log(), використовуй бібліотеку notiflix https://github.com/notiflix/Notiflix#readme.
//
