import PropTypes from 'prop-types';

function SearchButton({ onClick, label }) {
  return (
    <button
      type='button'
      className={`bg-[#27C277] text-white rounded-md px-8 py-3 w-full`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

SearchButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
};
export default SearchButton;
