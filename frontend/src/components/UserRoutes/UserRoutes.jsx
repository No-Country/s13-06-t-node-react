import { Link } from 'react-router-dom';

function UserRoutes() {
  return (
    <div
      className='h-[60px] bg-[#F5F6F8] flex text-[#566E8D] text-2xl justify-around items-center font-semibold'
      style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}
    >
      <Link to='/user/purchases'>Mis compras</Link>
      <Link to='/user/travel-distance'>Mis kilómetros</Link>
      <Link to='/user/settings'>Ajustes</Link>
    </div>
  );
}

export default UserRoutes;
