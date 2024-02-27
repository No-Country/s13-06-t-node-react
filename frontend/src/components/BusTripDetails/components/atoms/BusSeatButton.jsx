import PropTypes from 'prop-types';

const BusSeatButton = ({ seatNumber, isActive, onClick }) => {
  return (
    <button
      type='button'
      className={`lg:w-10 sm:w-7 w-10 lg:h-10 sm:h-7 h-10 rounded m-1 text-white ${
        isActive ? 'bg-[#FF5F00] ' : 'bg-[#68D79680]'
      }`}
      aria-label={`Seat ${seatNumber}`}
      onClick={onClick}
    >
      {seatNumber}
    </button>
  );
};

BusSeatButton.propTypes = {
  seatNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default BusSeatButton;
