import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function RegisterButton({ onClick, text, href }) {
  return (
    <Link
      to={href}
      onClick={onClick}
      className='block bg-transparent text-[#486284] border-l-2 border-[#486284] font-normal  py-2 px-3 underline'
    >
      {text}
    </Link>
  );
}

RegisterButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
};

export default RegisterButton;
