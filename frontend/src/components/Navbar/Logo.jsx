import { Link } from 'react-router-dom';
import LogoImage from '../LogoImage/LogoImage.jsx';

const Logo = () => {
  return (
    <Link
      to='/'
      className='flex-1 md:font-semibold font-bold text-white md:text-color-dark md:text-4xl'
    >
      <LogoImage />
    </Link>
  );
};
export default Logo;
