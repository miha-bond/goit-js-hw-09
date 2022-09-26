var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,o.call(n.exports,n,n.exports),n.exports}var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,t){r[e]=t},e.parcelRequired7c6=o),o("iQIUW");var n=o("fbklV");const d={input:document.querySelector("#datetime-picker"),startBtn:document.querySelector("[data-start]"),timer:document.querySelector(".timer"),field:document.querySelector(".field"),days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};d.startBtn.disabled=!0;const u={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){console.log(e[0])}};(0,n.default)(d.input,u);
//! Бібліотека flatpickr
//! Вибір дати
//! Відлік часу
//! НЕ БУДЕМО УСКЛАДНЮВАТИ
//! Форматування часу
//! Бібліотека повідомлень
//! УВАГА
//# sourceMappingURL=02-timer.3f01d12b.js.map
