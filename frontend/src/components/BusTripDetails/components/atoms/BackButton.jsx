import { Link } from 'react-router-dom';
import ArrowBack from '../../../../assets/BusTripDetails/Arrow Back.png';
import PropTypes from 'prop-types';

function BackButton({ to }) {
  return (
    <Link
      to={to}
      className='md:hidden bg-transparent flex rounded-full mb-2 items-center pl-3 pr-2 relative w-11 h-11 border border-[#D97706]'
    >
      <img src={ArrowBack} alt='Go back to previous page' />
    </Link>
  );
}

BackButton.propTypes = {
  to: PropTypes.string.isRequired
};

export default BackButton;
