
import { refs } from "./refs";

// ==============================================================

export function renderGalleryMarkup(images) {
    
    const markup = images.map(
        ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads}) => { 

        return`<li class="gallery-item">
                    <a class="gallery-link" href="${largeImageURL}">
                        <img class="gallery-image"
                            src="${webformatURL}" 
                            alt="${tags}" />
                    </a>
                    <ul class="list">
                        <li class="list-info">Likes<p class="info">${likes}</p></li>
                        <li class="list-info">Views<p class="info">${views}</p></li>
                        <li class="list-info">Comments<p class="info">${comments}</p></li>
                        <li class="list-info">Downloads<p class="info">${downloads}</p></li>
                    </ul>
                </li>`

    }).join('');

   
    refs.gallery.insertAdjacentHTML('beforeend', markup);

    refs.loader.classList.remove('loader');   

}