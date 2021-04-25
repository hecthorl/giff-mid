import Gif from './Gif';

const ListOfGifs = ({ gifs }) => {
   return (
      <div className="list-of-gifs">
         {gifs.map(item => (
            <Gif key={item.id} {...item} />
         ))}
      </div>
   );
};

export default ListOfGifs;
