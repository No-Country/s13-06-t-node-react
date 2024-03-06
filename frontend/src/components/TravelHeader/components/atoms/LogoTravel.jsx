import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LogoImage from '../../../../components/Navbar/Logo';
function LogoTravel({ imagePath }) {
  return (
    <div className='hidden lg:flex items-center box-border'>
      <Link
        to={'/'}
        className='font-semibold xl:text-4xl lg:text-3xl ml-1 lg:-ml-1'
      >
        {imagePath ? <LogoImage /> : 'Logo'}
      </Link>
    </div>
  );
}

LogoTravel.propTypes = {
  imagePath: PropTypes.string
};

export default LogoTravel;
