import arrow from '../../../assets/arrow.svg';
import mardeplata from '../../../assets/UserPurchase/mardeplata.jpg';
import PropTypes from 'prop-types';

export default function ItineraryPurchases({
  departure,
  arrival,
  origin,
  destination,
  date
}) {
  return (
    <div className='bg-[#DEE0E4BF] w-full rounded-xl m-7 '>
      <div className='border-[1px] border-b-[#566E8D] mb-5 mt-3  '>
        <p className='font-semibold text-2xl text-[#3A556A] mb-3 pl-16'>
          {' '}
          {date}
        </p>
      </div>

      <div className='flex justify-around mb-7 '>
        <img className='w-[114px] h-[91px] rounded-xl' src={mardeplata} />

        <div>
          <p className='font-bold text-xl mb-3'>Viaje de Ida</p>

          <div className='flex flex-row items-center gap-5'>
            <p className='font-medium text-xl'>{origin}</p>

            <img src={arrow} />

            <p className='font-medium text-xl'>{destination}</p>
          </div>
        </div>

        <div>
          <p className='font-medium text-sm mb-3'>Salida</p>
          <p className='font-medium text-xl'>{departure}</p>
        </div>

        <div>
          <p className='font-medium text-sm mb-3'>Llegada</p>
          <p className='font-medium text-xl'>{arrival}</p>
        </div>

        <div className='flex flex-col'>
          <button className='bg-[#84BCDA] rounded-full w-[150px] py-1 text-[15px] font-normal mb-3'>
            {' '}
            Ver ticket{' '}
          </button>
          <button className='bg-[#D97706] rounded-full w-[150px] py-1 text-[15px] font-normal'>
            {' '}
            Volver a comprar{' '}
          </button>
        </div>
      </div>
    </div>
  );
}

ItineraryPurchases.propTypes = {
  departure: PropTypes.string.isRequired,
  arrival: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};
