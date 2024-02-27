import { Link } from 'react-router-dom';
import person from '../../assets/person.svg';
import randomUserAvatar from '../../assets/UserNavbar/random-user-avatar.webp';

function UserNavbar() {
  function logout() {
    // empty for now, should come from context
  }

  return (
    <nav className='daisy-navbar bg-[#84BCDA] py-5 px-14'>
      <div className='flex-1'>
        <Link to='/' className='daisy-btn daisy-btn-ghost px-0 text-xl'>
          Logo
        </Link>
      </div>
      <div className='mr-9'>
        <span className='relative inline-block'>
          <img
            className='h-[60px] w-[60px] rounded-full'
            src={randomUserAvatar}
            alt='Avatar'
          />
          <span className='absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-400 ring-2 ring-white' />
        </span>
      </div>

      <div className='daisy-dropdown daisy-dropdown-end'>
        <div tabIndex={0} role='button' className='rounded-full align-middle'>
          <button className='flex justify-center items-center space-x-2 bg-[#486284] text-white md:px-4 py-2 rounded-md'>
            <img src={person} className='size-5' />
            <span>MI CUENTA</span>
          </button>
        </div>
        <ul
          tabIndex={0}
          className='mt-3 z-[1] p-2 shadow daisy-menu daisy-menu-sm daisy-dropdown-content bg-base-100 rounded-box w-52'
        >
          <li>
            <Link to='/user/profile'>Perfil</Link>
          </li>
          <li>
            <Link to='/user/settings'>Ajustes</Link>
          </li>
          <li>
            <button onClick={() => logout()}>Cerrar sesion</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default UserNavbar;
