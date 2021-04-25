import useNearScreen from 'hooks/useNearScreen';
import { lazy, Suspense } from 'react';

const TrendingSearches = lazy(() => import('./TrendingSearches'));

const LazyTrending = () => {
   //useNearScreen necesita de un parametro numerico.
   //si no se le pasa, por  defencto tiene 100px
   const { isNearScreen, fromRef } = useNearScreen({ distance: 100 });

   return (
      <div ref={fromRef}>
         <Suspense fallback={<i>༼ つ ◕_◕ ༽つ--Cargando papu!</i>}>
            {isNearScreen && <TrendingSearches />}
         </Suspense>
      </div>
   );
};

export default LazyTrending;
