import PropTypes from 'prop-types';

const AutocompleteInput = ({ id, value, onChange, onClick, placeholder }) => {
  return (
    <input
      id={id}
      name={id}
      type='text'
      className='appearance-auto xl:w-48 w-full bg-white border border-white text-gray-700 py-2 px-1 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
      value={value}
      onChange={onChange}
      onClick={onClick}
      placeholder={placeholder}
      tabIndex={0}
    />
  );
};

AutocompleteInput.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired
};

export default AutocompleteInput;
