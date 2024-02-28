import { useLocation } from 'react-router-dom';
import userHeader from '../../assets/UserHeader/user-header.webp';

function UserHeader() {
  const location = useLocation();
  let text;

  switch (location.pathname) {
    case '/user/settings':
      text = 'Informacion de usuario';
      break;
    case '/user/travel-distance':
      text = 'Kilometros recorridos';
      break;
    case '/user/purchases':
      text = 'Mis compras';
      break;
    default:
      text = '';
  }

  return (
    <div
      style={{ backgroundImage: `url(${userHeader})`, height: '182px' }}
      className='bg-cover flex justify-center items-center'
    >
      <h1 className='uppercase font-extrabold text-5xl text-white text-center'>
        {text}
      </h1>
    </div>
  );
}

export default UserHeader;
