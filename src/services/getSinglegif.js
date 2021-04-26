import { API_KEY, API_URL } from './settings';

const getSinglegif = async ({ id }) =>
   fetch(`${API_URL}/gifs/${id}?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(({ data: { id, images, title } }) => {
         const img = images.downsized_large.url;
         return { img, title, id };
      })
      .catch(err => console.log(err));

export default getSinglegif;
