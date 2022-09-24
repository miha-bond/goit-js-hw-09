const t={body:document.querySelector("body"),startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")};t.startBtn.disabled=!1,t.stopBtn.disabled=!0,t.startBtn.addEventListener("click",(e=>{e.preventDefault(),timerId=setInterval((()=>{t.startBtn.disabled=!0,t.stopBtn.disabled=!1,t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),500)})),t.stopBtn.addEventListener("click",(()=>{t.startBtn.disabled=!1,t.stopBtn.disabled=!0,clearInterval(timerId)}));
//! УВАГА
//! Для генерування випадкового кольору використовуй функцію getRandomHexColor.
//# sourceMappingURL=01-color-switcher.9a6c34ee.js.map
