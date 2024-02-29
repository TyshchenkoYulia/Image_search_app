export function getImages(inputValue) {

    const KEY = '42556248-7d7b04b226b16d9af953a75af';
    const BACE_URL = "https://pixabay.com/api/?key=";
    const QUERY = inputValue;

    const URL = BACE_URL+KEY+"&q="+QUERY+"&image_type=photo&orientation=horizontal&safesearch=true";
   
    
    return fetch(URL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error with status ${response.status}`)
            }
            return response.json();
        })
        .catch(error => {
            console.log(error);
        })
}