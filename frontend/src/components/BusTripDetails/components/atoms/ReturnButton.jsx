import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function ReturnButton({ to, label }) {
  return (
    <Link
      to={to}
      className='hidden sm:block text-center bg-transparent rounded-full w-40 hover:bg-[#D97706] text-[#3A556A] font-semibold hover:text-white py-2 px-6 border border-[#D97706] hover:border-transparent text-base'
    >
      {label}
    </Link>
  );
}

ReturnButton.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default ReturnButton;
