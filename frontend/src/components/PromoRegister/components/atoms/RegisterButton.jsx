import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function RegisterButton({ href, text }) {
  return (
    <Link
      className='lg:w-40 block text-center text-base bg-meadow-green hover:bg-green-600 text-white py-2 md:px-5 sm:px-2 px-10 rounded-full font-semibold'
      to={href}
    >
      {text}
    </Link>
  );
}

RegisterButton.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default RegisterButton;
