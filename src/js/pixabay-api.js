
import axios from 'axios';

// ================================================================
 
export const limit = 15;
// export let page = 1;
    
axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '42556248-7d7b04b226b16d9af953a75af';
    
export async function getImages(inputValue, page) {

    const QUERY = inputValue;
  

    const response = await axios.get('', {
        params: {
            page: page,
            per_page: limit,
            key: KEY,
            q: QUERY,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: "true",
        }
    });

    return response.data;
        
}