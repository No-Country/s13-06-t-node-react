import PropTypes from 'prop-types';

function LocationArrowRow({ startLocation, endLocation, arrowImage }) {
  return (
    <div className='grid grid-cols-5 md:flex justify-between items-center text-[#1A202C] text-xl font-semibold box-border mb-2 tracking-tight'>
      <p className='col-span-2 text-lg'>{startLocation}</p>
      <div className='col-span-1 mx-auto'>
        <img src={arrowImage} alt='Arrow Right' />
      </div>
      <p className='col-span-2 text-end text-lg'>{endLocation}</p>
    </div>
  );
}

LocationArrowRow.propTypes = {
  startLocation: PropTypes.string.isRequired,
  endLocation: PropTypes.string.isRequired,
  arrowImage: PropTypes.string.isRequired
};

export default LocationArrowRow;
