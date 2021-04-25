import GifsContex from 'context/GifsContex';
import { useContext, useEffect, useState } from 'react';
import getGifs from 'services/getGif';

const INITIAL_PAGE = 0;

const useGif = (keyword = 'kitty') => {
   const [page, setPage] = useState(INITIAL_PAGE);
   const [loading, setLoading] = useState(false);
   const [loadingNextPage, setLoadingNextPage] = useState(false);
   const { gifs, setGifs } = useContext(GifsContex);

   useEffect(() => {
      setLoading(true);
      getGifs({ keyword }).then(gifs => {
         setGifs(gifs);
         setLoading(false);
      });
   }, [keyword, setGifs]);

   useEffect(() => {
      if (!page) return;

      setLoadingNextPage(true);

      getGifs({ keyword, page }).then(nextGifs => {
         // setGifs(prevGifs => prevGifs.concat(nextGifs));
         setGifs(prevGifs => [...prevGifs, ...nextGifs]);
         // setGifs([...gifs, ...nextGifs]);
         setLoadingNextPage(false);
      });
   }, [page, keyword, setGifs]);

   return { gifs, loadingNextPage, loading, setPage };
};

export default useGif;
