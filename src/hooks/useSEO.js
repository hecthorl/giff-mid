import { useEffect, useRef } from 'react';

const useTitle = ({ title }) => {
   const previo = useRef(document.title);

   useEffect(() => {
      const prevtitle = previo.current;
      document.title = `Giffy | ${title}`;
      return () => (document.title = prevtitle);
   }, [title]);
};

export default useTitle;
