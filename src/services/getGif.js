import { API_KEY, API_URL } from './settings';

const getGifs = ({ limit = 5, keyword, page } = {}) => {
   //{ limit, setGifs, keyword, setLoading, page } | si no funciona usar >> = {}<<
   const offset = page * limit;
   const urlBase = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${offset}&rating=g&lang=es`;

   return fetch(urlBase)
      .then(res => res.json())
      .then(({ data }) => {
         return data.map(({ title, id, images }) => {
            const img = images.downsized_medium.url;
            return { title, id, img };
         });
      })
      .catch(e => console.log(e));
};

export default getGifs;
