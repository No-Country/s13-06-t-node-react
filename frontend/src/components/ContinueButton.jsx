import { useNavigate, useLocation } from 'react-router-dom';

function ContinueButton() {
  const navigate = useNavigate();
  const location = useLocation();

  //   TODO: agregar mas casos mientras vayamos agregando vistas
  function handleClick() {
    switch (location.pathname) {
      case '/ticket':
        navigate('/ticket/seats');
        break;
      case '/ticket/seats':
        navigate('/ticket/passengers');
        break;
      default:
        break;
    }
  }

  return (
    <button
      className='bg-[#D97706] px-5 rounded-[40px] h-11 flex items-center w-40 justify-center font-semibold text-white tracking-tight'
      onClick={() => handleClick()}
    >
      Continuar
    </button>
  );
}

export default ContinueButton;
