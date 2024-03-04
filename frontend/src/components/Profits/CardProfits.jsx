import PropTypes from 'prop-types';
import heart from '../../assets/BenefitPictures/heart.svg';

export default function CardProfits({ name, image, price }) {
  return (
    <div className='relative w-[306px] h-[388px]'>
      <img
        src={image}
        alt='Imagen del producto'
        className='w-full h-full object-cover rounded-lg'
      />
      <div className='absolute inset-0 flex flex-col justify-between rounded-lg p-4 bg-black bg-opacity-50 text-white'>
        <div className='flex justify-between'>
          <h3 className='text-xl font-semibold mb-2'>{name}</h3>
          <button>
            <img src={heart} alt='' />
          </button>
        </div>
        <div className='flex justify-between items-center'>
          <h4 className='font-bold text-xl'>{price}</h4>

          <button className='bg-white py-2 px-4 rounded-lg text-black'>
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}

CardProfits.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};
