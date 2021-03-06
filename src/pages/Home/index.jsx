import { useLocation } from 'wouter';
import ListOfGifs from 'components/ListOfGifs';
import TrendingSearches from 'components/TrendingSearches';
import useGif from 'hooks/useGif';
import SearchForm from 'components/SearchForm';
import { useCallback } from 'react';
import { Helmet } from 'react-helmet';

const Home = () => {
   const pushLocation = useLocation()[1];
   const { gifs } = useGif();

   const handleSubmit = useCallback(
      ({ keyword }) => {
         pushLocation(`/search/${keyword}`);
      },
      [pushLocation]
   );

   return (
      <>
         <Helmet>
            <title>Home | Gifs del rulos</title>
            <meta
               name="description"
               content="Pagina principal de Gifs del rulos"
            />
         </Helmet>
         <SearchForm onSubmit={handleSubmit} />
         <h3 className="App-title">Ultima busqueda:[mentira] </h3>
         <ListOfGifs gifs={gifs} />
         <ul>
            <TrendingSearches />
         </ul>
      </>
   );
};

export default Home;
