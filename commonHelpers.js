import{a as d,S as g,i as c}from"./assets/vendor-5401a4b0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const y="/goit-js-hw-12/assets/error-icon-945075c7.svg",h=15;d.defaults.baseURL="https://pixabay.com/api/";const L="42556248-7d7b04b226b16d9af953a75af";async function f(s,r){const a=s;return(await d.get("",{params:{page:r,per_page:h,key:L,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"}})).data}const t={gallery:document.querySelector(".gallery"),formSubmit:document.querySelector(".form"),input:document.querySelector(".input-value"),section:document.querySelector("section"),loader:document.querySelector("div"),loadMoreButton:document.querySelector('[data-action="load-more"]')};function b(s){const r=s.map(({webformatURL:a,largeImageURL:i,tags:e,likes:o,views:l,comments:m,downloads:p})=>`<li class="gallery-item">
                    <a class="gallery-link" href="${i}">
                        <img class="gallery-image"
                            src="${a}" 
                            alt="${e}" />
                    </a>
                    <ul class="list">
                        <li class="list-info">Likes<p class="info">${o}</p></li>
                        <li class="list-info">Views<p class="info">${l}</p></li>
                        <li class="list-info">Comments<p class="info">${m}</p></li>
                        <li class="list-info">Downloads<p class="info">${p}</p></li>
                    </ul>
                </li>`).join("");t.gallery.insertAdjacentHTML("beforeend",r),t.loader.classList.remove("loader")}const S=new g(".gallery a",{captionsData:"alt",captionDelay:250});let u=1,n;t.loadMoreButton.classList.add("is-close");t.formSubmit.addEventListener("submit",v);async function v(s){if(s.preventDefault(),t.gallery.innerHTML="",t.loadMoreButton.classList.remove("load-more"),n=t.input.value.trim(),n===""){c.show({titleColor:"#fff",titleSize:"16px",message:"Please, enter your search query!!!",messageColor:"#fff",messageSize:"16px",position:"topRight",backgroundColor:"#59A10D",close:!1});return}t.loader.classList.add("loader");try{const r=await f(n);r.total===0&&c.show({titleColor:"#fff",titleSize:"16px",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",messageSize:"16px",iconUrl:y,position:"topRight",backgroundColor:"#ef4040",close:!0,maxWidth:"432px"}),b(r.hits),S.refresh()}catch(r){console.log(r)}t.formSubmit.reset(),t.loadMoreButton.classList.remove("is-close")}t.loadMoreButton.addEventListener("click",w);async function w(){u+=1,t.loader.classList.add("loader"),await f(n,u),t.loadMoreButton.scrollIntoView(),t.loader.classList.remove("loader")}
//# sourceMappingURL=commonHelpers.js.map
