import PropTypes from 'prop-types';

function SelectedCityBadge({ cityName, onRemove }) {
  return (
    <div className='flex items-center justify-center bg-gray-200 rounded-md py-1 px-3 mr-2 mb-2 text-sm'>
      <button type='button' className='text-[0.7rem]' onClick={onRemove}>
        x
      </button>
      <span className='ml-2'>{cityName}</span>
    </div>
  );
}

SelectedCityBadge.propTypes = {
  cityName: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired
};

export default SelectedCityBadge;
