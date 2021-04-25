import { memo, useState } from 'react';

const SearchForm = ({ onSubmit }) => {
   const [keyword, setKeyword] = useState('');

   const handleSubmit = event => {
      event.preventDefault();
      onSubmit({ keyword });
   };

   return (
      <form onSubmit={handleSubmit}>
         <input
            type="text"
            value={keyword}
            onChange={e => setKeyword(e.target.value)}
         />
         <input type="submit" value="Enviar" />
      </form>
   );
};

export default memo(SearchForm);
