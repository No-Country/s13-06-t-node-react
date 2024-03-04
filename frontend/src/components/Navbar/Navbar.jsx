import { useState } from 'react';
import { Logo } from './Logo';
import { NavigationLinks } from './NavigationLinks';
import { UserActions } from './UserActions';
import person from '../../assets/Navbar/person.svg';
import hamburgerBar from '../../assets/Navbar/hamburgerbar.svg';
import './Navbar.css';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    // TODO: el boton Mi Cuenta se rompe de 768px a 910px, solucionar
    <nav className='bg-[#486284] md:bg-[#D3DCE7] h-16 relative md:min-h-28 border-0 md:border-2 md:border-[#697f9c] text-nowrap'>
      <div className='h-full mx-6 md:mx-14 flex items-center'>
        <Logo />
        <button
          className={`md:hidden text-white md:text-[#486284]`}
          onClick={toggleMenu}
        >
          <img src={hamburgerBar} />
        </button>
        <button className='md:hidden ml-4 align-middle'>
          <img src={person} className='' />
        </button>
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
            <ul className='absolute p-2 right-4 bg-white border rounded shadow-md'>
              <NavigationLinks />
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
