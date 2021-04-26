import { useEffect, useState } from 'react';
import getSinglegif from 'services/getSinglegif';
import useGif from './useGif';

const useSingleGif = ({ id }) => {
   const { gifs } = useGif();
   // const ide = id;
   const gifFromCache = gifs.find(item => {
      return item.id === id;
   });
   const [gif, setGif] = useState(gifFromCache);

   useEffect(() => {
      //llamar al servicio si no tenemos gif
      if (!gif) getSinglegif({ id }).then(gif => setGif(gif));
   }, [gif, id]);

   return gif;
};

export default useSingleGif;
