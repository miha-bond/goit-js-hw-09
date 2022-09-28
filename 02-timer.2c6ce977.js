var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("iQIUW"),a=o("fbklV");const s={input:document.querySelector("#datetime-picker"),startBtn:document.querySelector("[data-start]"),days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};s.startBtn.disabled=!0;const d={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){let t=e[0].getTime()-Date.now();if(console.log(t),t<=0)return r.Notify.failure("Виберіть час в майбутньому");s.startBtn.disabled=!1,s.startBtn.addEventListener("click",(()=>{s.startBtn.disabled=!0,r.Notify.info("Відлік почато");let t=setInterval((()=>{const n=e[0].getTime()-Date.now(),o=//! flatpickr
function(e){const t=1e3,n=60*t,o=60*n,r=24*o,a=Math.floor(e/r),s=Math.floor(e%r/o),d=Math.floor(e%r%o/n),i=Math.floor(e%r%o%n/t);return{days:a,hours:s,minutes:d,seconds:i}}(n);if(s.days.textContent=i(o.days),s.hours.textContent=i(o.hours),s.minutes.textContent=i(o.minutes),s.seconds.textContent=i(o.seconds),n<=500)return clearInterval(t),r.Notify.success("Відлік закінчено")}),1e3)}))}};function i(e){return String(e).padStart(2,"0")}
//! Бібліотека flatpickr
//! Вибір дати
//! Відлік часу
//! НЕ БУДЕМО УСКЛАДНЮВАТИ
//! Форматування часу
//! Бібліотека повідомлень
//! УВАГА
(0,a.default)(s.input,d);
//# sourceMappingURL=02-timer.2c6ce977.js.map
