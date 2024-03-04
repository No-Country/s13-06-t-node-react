import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function SearchButton({ onClick, label, url, disabled }) {
  return (
    <Link
      to={disabled ? '/' : url}
      className={`block rounded-md px-8 py-3 w-full text-center text-white font-semibold text-decoration-none ${
        disabled
          ? 'bg-btn-orange cursor-not-allowed'
          : 'bg-btn-orange text-white cursor-pointer'
      }`}
      onClick={disabled ? undefined : onClick}
    >
      {label}
    </Link>
  );
}

SearchButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired
};

export default SearchButton;
