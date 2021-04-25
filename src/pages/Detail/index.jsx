import useGlobalgifs from 'hooks/useGlobalgifs';

const Detail = ({ params }) => {
   const { gifs } = useGlobalgifs();

   const gif = gifs.find(({ id }) => id === params.id);

   console.log(gif || 'No hay gif');

   return (
      <div>
         <img src={gif.img} alt="gify" />
      </div>
   );
};

export default Detail;
