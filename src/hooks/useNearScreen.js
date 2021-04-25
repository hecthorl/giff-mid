import { useEffect, useRef, useState } from 'react';

const useNearScreen = ({ distance = 100, externalRef, once = true } = {}) => {
   const fromRef = useRef(null);
   const [isNearScreen, setShow] = useState(false);

   useEffect(() => {
      const element = fromRef?.current || externalRef?.current;
      const onChange = (entires, observer) => {
         const { isIntersecting } = entires[0];

         if (isIntersecting) {
            setShow(true);
            once && observer.disconnect();
         } else {
            !once && setShow(false);
         }
      };

      const observer = new IntersectionObserver(onChange, {
         rootMargin: `${distance}px`,
      });

      if (element) observer.observe(element);

      return () => observer.disconnect();
   });

   return { isNearScreen, fromRef };
};

export default useNearScreen;
