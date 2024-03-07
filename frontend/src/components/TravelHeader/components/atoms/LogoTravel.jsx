import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
function LogoTravel({ imagePath }) {
  return (
    <div className='hidden lg:flex items-center box-border'>
      <Link
        to={'/'}
        className='font-semibold xl:text-4xl lg:text-3xl ml-1 lg:-ml-1'
      >
        {imagePath ? (
          <img src={imagePath} alt='Logo' className='w-52' />
        ) : (
          'Logo'
        )}
      </Link>
    </div>
  );
}

LogoTravel.propTypes = {
  imagePath: PropTypes.string
};

export default LogoTravel;
