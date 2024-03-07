import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function AccountButton({ iconSrc, iconAlt, buttonText, href }) {
  return (
    <Link
      to={href}
      className={`bg-[#486284] flex text-white rounded-md px-4 py-3 uppercase text-sm whitespace-nowrap`}
    >
      <img src={iconSrc} alt={iconAlt} className='mr-1 -ml-1' /> {buttonText}
    </Link>
  );
}

AccountButton.propTypes = {
  iconSrc: PropTypes.string,
  iconAlt: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
};

export default AccountButton;
