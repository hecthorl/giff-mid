import { Link } from 'wouter';

const Category = ({ name, options }) => {
   return (
      <div className="category">
         <h3 className="category-title">{name}</h3>
         <ul>
            {options.map((item, i) => {
               return (
                  <li key={i}>
                     <Link to={`/search/${item}`}>{item}</Link>
                  </li>
               );
            })}
         </ul>
      </div>
   );
};

export default Category;
