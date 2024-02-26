import PropTypes from 'prop-types';

function TripDetailsHeader({ title }) {
  return (
    <h3 className='text-center mb-7 text-[#1A202C] font-semibold text-lg'>
      {title}
    </h3>
  );
}

TripDetailsHeader.propTypes = {
  title: PropTypes.string.isRequired
};

export default TripDetailsHeader;
