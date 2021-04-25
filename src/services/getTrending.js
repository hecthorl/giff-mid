import { API_KEY, API_URL } from './settings';

const getTrending = async ({ setTrends, setLoading }) => {
   const urlBase = `${API_URL}/trending/searches?api_key=${API_KEY}`;
   // setLoading(true);

   try {
      const res = await fetch(urlBase);
      const { data } = await res.json();
      // setLoading(false);
      setTrends(data);
   } catch (err) {
      throw new Error(err);
   }
};

export default getTrending;
