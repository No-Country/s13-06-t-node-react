import PropTypes from 'prop-types';
import BusSeatButton from '../atoms/BusSeatButton';
import { useState } from 'react';

function BusSeatInfo({ SeatIcon, seatData }) {
  const sortedSeatData = [...seatData].sort(
    (a, b) => a.seatNumber - b.seatNumber
  );
  const [info, setInfo] = useState(sortedSeatData);

  const handleSeatClick = (seatNumber) => {
    const updatedSeatData = info.map((seat) => {
      if (seat.seatNumber === seatNumber) {
        return { ...seat, isActive: true }; // Actualizar el estado de isActive
      } else {
        return { ...seat, isActive: false }; // Desactivar otros asientos
      }
    });
    setInfo(updatedSeatData);
  };

  return (
    <div className='grid grid-cols-5 text-[#1A202C] text-base font-bold box-border'>
      <div className='col-span-1 flex items-center'>
        <img src={SeatIcon} alt='Bus Icon' />
      </div>
      <div className='col-span-4 text-end'>
        {info.map((seat) => (
          <BusSeatButton
            key={seat.seatNumber}
            seatNumber={seat.seatNumber}
            isActive={seat.isActive}
            onClick={() => handleSeatClick(seat.seatNumber)}
          />
        ))}
      </div>
    </div>
  );
}

BusSeatInfo.propTypes = {
  SeatIcon: PropTypes.string.isRequired,
  seatData: PropTypes.arrayOf(
    PropTypes.shape({
      seatNumber: PropTypes.number.isRequired,
      isActive: PropTypes.bool.isRequired
    })
  ).isRequired
};

export default BusSeatInfo;
