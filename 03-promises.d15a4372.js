var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var u={id:e,exports:{}};return t[e]=u,r.call(u.exports,u,u.exports),u.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r);var u=r("iQIUW");const o={delay:document.querySelector('input[name="delay"]'),step:document.querySelector('input[name="step"]'),amount:document.querySelector('input[name="amount"]'),btnSubmit:document.querySelector(".form")};function l(e,t){return new Promise(((n,r)=>{const u=Math.random()>.3;setTimeout((()=>{u?n({i:e,delayValue:t}):r({i:e,delayValue:t})}),t)}))}o.btnSubmit.addEventListener("submit",(e=>{e.preventDefault();let t=Number(o.delay.value),n=Number(o.step.value),r=Number(o.amount.value);for(let e=1;e<r;e+=1)l(e,t).then((({i:e,delayValue:t})=>u.Notify.success(`Fulfilled promise ${e} in ${t}ms`))).catch((({i:e,delayValue:t})=>u.Notify.failure(`Rejected promise ${e} in ${t}ms`))),t+=n}));
//! Бібліотека повідомлень
//! УВАГА
//# sourceMappingURL=03-promises.d15a4372.js.map