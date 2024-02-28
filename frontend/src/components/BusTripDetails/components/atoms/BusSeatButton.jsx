import PropTypes from 'prop-types';

const BusSeatButton = ({ seatNumber, isActive, onClick }) => {
  return (
    <button
      type='button'
      className={`xl:w-10 xl:h-10 lg:w-8 lg:h-8 md:h-10 md:w-10 sm:w-8 sm:h-8 w-10 h-10 rounded m-1 text-white ${
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
