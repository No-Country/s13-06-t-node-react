import { useEffect, useState } from 'react';
import Logo from './Logo';
import { NavigationLinks } from './NavigationLinks';
import { UserActions } from './UserActions';
import person from '../../assets/Navbar/person.svg';
import hamburgerBar from '../../assets/Navbar/hamburgerbar.svg';
import './Navbar.css';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (windowWidth > 640 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth, isMenuOpen]);

  return (
    // TODO: el boton Mi Cuenta se rompe de 768px a 910px, solucionar
    <nav className='bg-[#D8ECF6] h-16 relative md:min-h-28 border-0 md:border-2 md:border-[#697f9c] text-nowrap'>
      <div className='h-full mx-6 md:mx-14 flex items-center'>
        <Logo />
        <div className='flex items-center md:block absolute right-5'>
          <button
            className={`md:hidden text-white md:text-[#486284]`}
            onClick={toggleMenu}
          >
            <img src={hamburgerBar} />
          </button>
          <button className='md:hidden ml-4 align-middle'>
            <img src={person} className='' />
          </button>
        </div>
        <div
          id='navbar-items'
          className={`md:flex ${isMenuOpen ? 'flex' : 'hidden'} md:items-center md:justify-end flex-col md:flex-row overflow-hidden flex-shrink flex-grow flex-`}
        >
          {!isMenuOpen ? (
            <>
              <NavigationLinks />
              <span className='text-lg mx-8 text-[#566e8d]'>|</span>
              <UserActions />
            </>
          ) : (
            <ul className='absolute md:bottom-7 -bottom-60  p-2 right-0 z-50 md:bg-transparent md:border-none md:rounded-none md:shadow-none bg-[#8DDBB5] border-[#8DDBB5] border rounded shadow-md'>
              <NavigationLinks />
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
