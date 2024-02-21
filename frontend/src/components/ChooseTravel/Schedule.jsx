import './Schedule.css';
import green from '../../assets/arrow-green.svg';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

export default function Schedule({ departure, arrival, origin, destination }) {
  const dispatch = useDispatch();

  // TODO: Adjust when back-end endpoint is available
  const travel = {
    departure: departure,
    arrival: arrival,
    origin: origin,
    destination: destination
  };

  const handleSelect = () => {
    dispatch({ type: 'SET_TRAVEL_SELECTED', payload: travel });
  };

  return (
    // TODO: button encompasando cambia los estilos, son aplicados por defecto a los elementos button
    // tengo que revisar cuales estilos exactamente se aplican y removerlos en Schedule.css
    <button className='daisy-btn-block select-button' onClick={handleSelect}>
      <div className='bg-[#93E0BB] flex  py-8 px-4 rounded-lg mb-4 pr-12 justify-between w-full flex-col md:flex-row relative'>
        <div className='flex gap-12 mb-8 md:mb-0 '>
          <div className='gap-2 flex flex-col'>
            <p className='font-medium text-lg'>{departure}</p>
            <p className='text-sm font-normal'> {origin}</p>
          </div>

          <div className='flex flex-col items-center gap-1'>
            <p className='font-normal text-xs'>4 hrs 45min</p>
            <img src={green} alt='' />
          </div>

          <div className='gap-2 flex flex-col'>
            <p className='font-medivdium text-lg'>{arrival}</p>
            <p className='text-sm font-normal'>{destination} </p>
          </div>
        </div>

        <div className='bg-emerald-500 px-5 py-0 rounded-[10px] h-11 flex items-center w-40 justify-center md:static absolute bottom-2 right-2 '>
          <p> $00.000-</p>
        </div>
      </div>
    </button>
  );
}

Schedule.propTypes = {
  departure: PropTypes.string.isRequired,
  arrival: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired
};
