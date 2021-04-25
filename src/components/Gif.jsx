import { memo } from 'react';
import { Link } from 'wouter';
import './gif.css';

const Gif = ({ title, img, id }) => {
   return (
      <div className="gif">
         <Link to={`/gif/${id}`}>{title}</Link>
         <img loading="lazy" src={img} alt="gify" />
      </div>
   );
};

export default memo(Gif, (preveProp, nextProp) => {
   return preveProp.id === nextProp.id;
});
