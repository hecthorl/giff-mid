import useSingleGif from 'hooks/useSingleGif';
import { memo } from 'react';
import { Helmet } from 'react-helmet';

const Detail = ({ params: { id } }) => {
   const gif = useSingleGif({ id });

   if (!gif) return null;
   const { title, img } = gif;

   return (
      <div>
         <Helmet>
            <title> Gify | {title}</title>
         </Helmet>
         <h3>{title}</h3>
         <img src={img} alt="gify" />
      </div>
   );
};

export default memo(Detail);
