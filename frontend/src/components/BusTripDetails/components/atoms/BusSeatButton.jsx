import PropTypes from 'prop-types';

const BusSeatButton = ({ seatNumber, isActive, onClick }) => {
  return (
    <button
      type='button'
      className={`w-10 h-10 rounded m-1 text-white ${
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
