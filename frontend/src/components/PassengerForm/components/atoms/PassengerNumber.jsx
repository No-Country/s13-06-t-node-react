import PropTypes from 'prop-types';

function PassengerNumber({ currentPassenger }) {
  return (
    <div className=' w-full flex items-center justify-center'>
      <p className='text-center mr-1'>Pasajero {currentPassenger}</p>
    </div>
  );
}

PassengerNumber.propTypes = {
  currentPassenger: PropTypes.number.isRequired
};
export default PassengerNumber;
