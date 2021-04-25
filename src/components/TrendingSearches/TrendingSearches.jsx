import { useEffect, useState } from 'react';
import Category from 'components/Category';
import getTrending from 'services/getTrending';

const TrendingSearches = () => {
   const [trends, setTrends] = useState([]);

   useEffect(() => {
      getTrending({ setTrends });
   }, []);

   // console.log(trends);
   return <Category name="Categories" options={trends} />;
};

export default TrendingSearches;
