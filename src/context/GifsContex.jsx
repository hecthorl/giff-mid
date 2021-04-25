import { createContext, useState } from 'react';

const GifsContex = createContext(null);

export const GifsContexProvider = ({ children }) => {
   const [gifs, setGifs] = useState([]);

   return (
      <GifsContex.Provider value={{ gifs, setGifs }}>
         {children}
      </GifsContex.Provider>
   );
};

export default GifsContex;
