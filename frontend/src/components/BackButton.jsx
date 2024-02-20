import { useLocation, useNavigate } from 'react-router-dom';

function BackButton() {
  const navigate = useNavigate();
  const location = useLocation();

  //   TODO: agregar mas casos mientras vayamos agregando vistas
  function handleClick() {
    switch (location.pathname) {
      case '/ticket':
        navigate('/');
        break;
      case '/ticket/seats':
        navigate('/ticket');
        break;
      default:
        break;
    }
  }

  return (
    <button
      className='bg-transparent border-[#D97706] border-[1px] px-5 py-0 rounded-[40px] h-11 lg:flex items-center w-40 justify-center hidden text-[#FF5F00] font-semibold'
      onClick={() => handleClick()}
    >
      Volver
    </button>
  );
}

export default BackButton;
