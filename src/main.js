import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import errorIcon from "../src/img/error-icon.svg";

import { getImages, limit} from "./js/pixabay-api";
import { renderGalleryMarkup } from "./js/render-functions";

import { refs } from "./js/refs";

// ====================================================================

const lightbox = new SimpleLightbox('.gallery a',
                                        { 
                                        captionsData: 'alt',
                                        captionDelay: 250,
    });

// ====================================================================
let page = 1;
let inputValue;

refs.loadMoreButton.classList.add('is-close');

refs.formSubmit.addEventListener('submit', onButtonSubmitForm);            
    
async function onButtonSubmitForm(event) {
    event.preventDefault();

    refs.gallery.innerHTML = '';
    refs.loadMoreButton.classList.remove('load-more');

    inputValue = refs.input.value.trim();
    refs.loadMoreButton.classList.add('is-close');

    if (inputValue === '') {
            iziToast.show({
                    
                    titleColor: '#fff',
                    titleSize: '16px',
                    message: `Please, enter your search query!!!`,
                    messageColor: '#fff',
                    messageSize: '16px',
                    position: 'topRight',
                    backgroundColor: '#59A10D',
                    close: false,
            })
        
        return;
    }

    refs.loader.classList.add('loader');

    try {
       const data = await getImages(inputValue);
        
        
        if (data.total === 0) {
          
                iziToast.show({
                    titleColor: '#fff',
                    titleSize: '16px',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    messageColor: '#fff',
                    messageSize: '16px',
                    iconUrl: errorIcon,
                    position: 'topRight',
                    backgroundColor: '#ef4040',
                    close: true,
                    maxWidth: '432px',
                })
            
            refs.loader.classList.remove('loader');
            return;          
        }

        renderGalleryMarkup(data.hits);

        

        lightbox.refresh();

        

    } catch (error) {
        
        console.log(error);
    }

    
    
    refs.formSubmit.reset();

    refs.loadMoreButton.classList.remove('is-close');
}
    

refs.loadMoreButton.addEventListener('click', onButtonClickLoadmore);


async function onButtonClickLoadmore() {
    
    page += 1;
    
    refs.loader.classList.add('loader');
    try {

        const data = await getImages(inputValue, page);
        renderGalleryMarkup(data.hits);
        lightbox.refresh();
        if (data.hits.length > data.totalHits) {
                refs.loadMoreButton.classList.add('is-close');

                return iziToast.error({
                            title: 'Error',
                            message: "We're sorry, but you've reached the end of search results.",
                        });
        }
        
        // let rect = gallery.getBoundingClientRect();
        // console.log(rect);

    } catch (error) {
        console.log(error);
    }
    

    refs.loader.classList.remove('loader');

    
}
    

    // refs.loadMoreButton.classList.add('load-more');