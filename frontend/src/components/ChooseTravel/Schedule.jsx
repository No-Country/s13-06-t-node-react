import './Schedule.css';
import green from '../../assets/arrow-green.svg';
import white from '../../assets/arrow-white.svg';

import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import isEqual from 'lodash-es/isEqual';

export default function Schedule({ departure, arrival, origin, destination }) {
  const dispatch = useDispatch();
  const travelSelected = useSelector((state) => state.travel.travelSelected);

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

  // Check if the current Schedule component is active
  const isActive = isEqual(travel, travelSelected); // Use _.isEqual to compare the objects

  return (
    // TODO: button encompasando cambia los estilos, son aplicados por defecto a los elementos button
    // tengo que revisar cuales estilos exactamente se aplican y removerlos en Schedule.css
    <button className='daisy-btn-block select-button' onClick={handleSelect}>
      <div
        className={`flex py-8 px-4 rounded-lg mb-4 pr-12 justify-between w-full flex-col md:flex-row relative ${isActive ? 'bg-[#93E0BB]' : 'bg-[#DEE0E4]'}`}
      >
        <div className='flex gap-12 mb-8 md:mb-0 '>
          <div className='gap-2 flex flex-col text-[#486284]'>
            <p className='font-medium text-lg '>{departure}</p>
            <p className='text-sm font-normal '> {origin}</p>
          </div>

          <div className='flex flex-col items-center gap-1'>
            <p className='font-normal text-xs'>4 hrs 45min</p>
            <img src={isActive ? white : green} alt='' />
          </div>

          <div className='gap-2 flex flex-col text-[#486284]'>
            <p className='font-medium text-lg'>{arrival}</p>
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
