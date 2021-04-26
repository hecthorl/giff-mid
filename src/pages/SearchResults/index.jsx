import ListOfGifs from 'components/ListOfGifs';
import useGif from 'hooks/useGif';
import useNearScreen from 'hooks/useNearScreen';
import debounce from 'just-debounce-it';
import { useCallback, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import './searchResults.css';

const SearchResults = ({ params: { keyword } }) => {
   const { gifs, loading, setPage } = useGif(keyword);
   const externalRef = useRef(null);

   const { isNearScreen } = useNearScreen({
      externalRef: loading ? null : externalRef,
      once: false,
      distance: 200,
   });

   const handleDebounceNextPage = useCallback(
      debounce(() => setPage(page => page + 1), 100),
      [setPage]
   );

   useEffect(() => {
      if (isNearScreen) handleDebounceNextPage();
      // console.log(isNearScreen);
   }, [isNearScreen, handleDebounceNextPage]);

   if (loading)
      return (
         <h2>
            Cargando... <span style={{ fontSize: '60px' }}>💫</span>
         </h2>
      );
   return (
      <>
         <Helmet>
            <title> Search Gif | {decodeURI(keyword)} </title>
            <meta
               name="description"
               content={`resultados de ${decodeURI(keyword)}`}
            />
         </Helmet>
         <h3>{decodeURI(keyword)}</h3>
         <ListOfGifs gifs={gifs} />
         <div id="visor" ref={externalRef}></div>
      </>
   );
};

export default SearchResults;
