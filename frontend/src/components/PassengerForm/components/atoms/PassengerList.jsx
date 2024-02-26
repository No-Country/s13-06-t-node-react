import PropTypes from 'prop-types';

function PassengerList({ passengers, isToggled }) {
  return (
    isToggled && (
      <div className='absolute left-0 mt-1 border border-[#E2E8F0] shadow-lg bg-white z-40 w-full mx-auto'>
        {passengers.map((passenger, index) => (
          <button
            type='button'
            key={index}
            className='flex items-center justify-center h-8 w-full px-3 sm:text-sm text-[0.75rem] bg-[#CEFABED1] text-emerald-600 hover:underline hover:text-emerald-700'
          >
            {passenger.name} {passenger.lastname} - DNI &gt; {passenger.dni}
          </button>
        ))}
      </div>
    )
  );
}

PassengerList.propTypes = {
  passengers: PropTypes.arrayOf(
    PropTypes.shape({
      dni: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      lastname: PropTypes.string.isRequired
    })
  ).isRequired,
  isToggled: PropTypes.bool.isRequired
};

export default PassengerList;
