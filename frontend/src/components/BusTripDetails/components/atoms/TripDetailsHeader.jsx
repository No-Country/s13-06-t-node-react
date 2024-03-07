import PropTypes from 'prop-types';

function TripDetailsHeader({ title }) {
  return (
    <h3 className='text-center mb-4 text-[#1A202C] font-extrabold text-xl mt-2'>
      {title}
    </h3>
  );
}

TripDetailsHeader.propTypes = {
  title: PropTypes.string.isRequired
};

export default TripDetailsHeader;
