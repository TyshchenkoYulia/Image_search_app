import{a as d,S as L,i as u}from"./assets/vendor-5401a4b0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const b="/goit-js-hw-12/assets/error-icon-945075c7.svg",f=15;d.defaults.baseURL="https://pixabay.com/api/";const S="42556248-7d7b04b226b16d9af953a75af";async function m(s,r){const{data:a}=await d.get("",{params:{page:r,per_page:f,key:S,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"}});return a}const o={gallery:document.querySelector(".gallery"),formSubmit:document.querySelector(".form"),input:document.querySelector(".input-value"),section:document.querySelector("section"),loader:document.querySelector("div"),loadMoreButton:document.querySelector('[data-action="load-more"]')};function p(s){const r=s.map(({webformatURL:a,largeImageURL:l,tags:e,likes:t,views:i,comments:y,downloads:h})=>`<li class="gallery-item">
                    <a class="gallery-link" href="${l}">
                        <img class="gallery-image"
                            src="${a}" 
                            alt="${e}" />
                    </a>
                    <ul class="list">
                        <li class="list-info">Likes<p class="info">${t}</p></li>
                        <li class="list-info">Views<p class="info">${i}</p></li>
                        <li class="list-info">Comments<p class="info">${y}</p></li>
                        <li class="list-info">Downloads<p class="info">${h}</p></li>
                    </ul>
                </li>`).join("");o.gallery.insertAdjacentHTML("beforeend",r)}const g=new L(".gallery a",{captionsData:"alt",captionDelay:250});let c,n;o.loadMoreButton.classList.add("is-close");o.formSubmit.addEventListener("submit",v);async function v(s){if(s.preventDefault(),o.gallery.innerHTML="",o.loadMoreButton.classList.remove("load-more"),c=1,n=o.input.value.trim(),o.loadMoreButton.classList.add("is-close"),n===""){u.show({titleColor:"#fff",titleSize:"16px",message:"Please, enter your search query!!!",messageColor:"#fff",messageSize:"16px",position:"topRight",backgroundColor:"#59A10D",close:!1});return}o.loader.classList.add("loader");try{const r=await m(n,c);if(r.total===0){u.show({titleColor:"#fff",titleSize:"16px",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",messageSize:"16px",iconUrl:b,position:"topRight",backgroundColor:"#ef4040",close:!0,maxWidth:"432px"}),o.loader.classList.remove("loader");return}p(r.hits),o.loader.classList.remove("loader"),g.refresh()}catch(r){console.log(r)}o.formSubmit.reset(),o.loadMoreButton.classList.remove("is-close")}o.loadMoreButton.addEventListener("click",w);async function w(){c+=1,o.loader.classList.add("loader");try{const s=await m(n,c);if(p(s.hits),window.scrollBy({top:172*3+24*2+20*2,behavior:"smooth"}),g.refresh(),s.hits.length<f)return o.loadMoreButton.classList.add("is-close"),u.error({icon:"",color:"blue",position:"topRight",message:"We're sorry, but you've reached the end of search results."})}catch(s){console.log(s)}o.loader.classList.remove("loader")}
//# sourceMappingURL=commonHelpers.js.map
