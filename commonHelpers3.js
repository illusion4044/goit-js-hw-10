/* empty css                      */import{f as h,i as p}from"./assets/vendor-77e16229.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const c=document.querySelector("button[data-start]"),l=document.querySelector("#datetime-picker"),n={days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.query.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};let f,m=null;c.disabled=!0;const g={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(r){const o=r[0];o<new Date?(p.error({title:"Error",message:"Please choose a date in the future"}),c.disabled=!0):(m=o,c.disabled=!1)}};h(l,g);c.addEventListener("click",()=>{if(!m)return;const r=m.getTime();c.disabled=!0,l.disabled=!0;function o(){const i=r-new Date().getTime();if(i<=0){clearInterval(f),l.disabled=!1,n.days.textContent="00",n.hours.textContent="00",n.minutes.textContent="00",n.seconds.textContent="00";return}const{days:e,hours:t,minutes:s,seconds:d}=S(i);n.days.textContent=u(e.toString()),n.hours.textContent=u(t.toString()),n.minutes.textContent=u(s.toString()),n.seconds.textContent=u(d.toString())}f=setInterval(o,1e3),o()});function S(r){const t=Math.floor(r/864e5),s=Math.floor(r%864e5/36e5),d=Math.floor(r%864e5%36e5/6e4),y=Math.floor(r%864e5%36e5%6e4/1e3);return{days:t,hours:s,minutes:d,seconds:y}}function u(r){return r.padStart(2,"0")}
//# sourceMappingURL=commonHelpers3.js.map
