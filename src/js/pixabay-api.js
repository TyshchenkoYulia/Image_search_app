
import axios from 'axios';

// ================================================================
 
    
axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '42556248-7d7b04b226b16d9af953a75af';
    
export async function getImages(searchQuery, page) {
  
    const {data} = await axios.get('', {
        params: {
            page: page,
            per_page: 15,
            key: KEY,
            q: searchQuery,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: "true",
        }
    });

    return data;
        
}