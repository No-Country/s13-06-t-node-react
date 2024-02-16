import PropTypes from 'prop-types';

export default function CardProfits({ name, image, price }) {
  return (
    <div className='bg-gray-200 rounded-lg shadow-md p-2 w-80 relative'>
      <div className='flex justify-between'>
        <h3 className='text-xl font-semibold mb-2'>{name}</h3>
        <button className=' text-red-500'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='h-6 w-6'
          >
            <path
              fillRule='evenodd'
              d='M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z'
              clipRule='evenodd'
            />
          </svg>
        </button>
      </div>
      {/* Imagen del producto */}
      <img
        src={image}
        alt='Imagen del producto'
        className='w-full h-56 object-cover rounded-t-lg'
      />

      {/* Botón para comprar */}
      <div className='flex justify-between items-center pt-3'>
        <h4 className='font-bold pl-2 text-xl'>{price}</h4>
        <button className='bg-white py-2 px-4 rounded-lg '>Comprar</button>
      </div>
    </div>
  );
}

CardProfits.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};
