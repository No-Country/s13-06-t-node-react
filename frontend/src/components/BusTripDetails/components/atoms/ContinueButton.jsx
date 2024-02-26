import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function ContinueButton({ to, label }) {
  return (
    <Link
      to={to}
      className='md:hidden text-center bg-[#D97706] rounded-full w-40 my-auto hover:bg-[#D97706] text-white font-semibold hover:text-white py-2 px-6 border border-[#D97706] hover:border-transparent text-base'
    >
      {label}
    </Link>
  );
}

ContinueButton.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default ContinueButton;
