!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("h6c0i"),a=o("dbdyf"),d={input:document.querySelector("#datetime-picker"),startBtn:document.querySelector("[data-start]"),days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};d.startBtn.disabled=!0;var i={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose:function(e){var t=e[0].getTime()-Date.now();if(console.log(t),t<=0)return r.Notify.failure("Виберіть час в майбутньому");d.startBtn.disabled=!1,d.startBtn.addEventListener("click",(function(){d.startBtn.disabled=!0,r.Notify.info("Відлік почато");var t=setInterval((function(){var n,o,a,i,u,l,c,f,m,y=e[0].getTime()-Date.now(),p=(n=y,u=24*(i=60*(a=60*(o=1e3))),l=Math.floor(n/u),c=Math.floor(n%u/i),f=Math.floor(n%u%i/a),m=Math.floor(n%u%i%a/o),{days:l,hours:c,minutes:f,seconds:m});if(d.days.textContent=s(p.days),d.hours.textContent=s(p.hours),d.minutes.textContent=s(p.minutes),d.seconds.textContent=s(p.seconds),y<=500)return clearInterval(t),r.Notify.success("Відлік закінчено")}),1e3)}))}};function s(e){return String(e).padStart(2,"0")}
//! Бібліотека flatpickr
//! Вибір дати
//! Відлік часу
//! НЕ БУДЕМО УСКЛАДНЮВАТИ
//! Форматування часу
//! Бібліотека повідомлень
//! УВАГА
(0,a.default)(d.input,i)}();
//# sourceMappingURL=02-timer.59bb7efa.js.map
