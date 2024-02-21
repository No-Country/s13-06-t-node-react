import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ContinueButton() {
  const navigate = useNavigate();
  const location = useLocation();

  // Access states from the Redux store
  const travelSelected = useSelector((state) => state.travel.travelSelected);
  const seatSelected = useSelector((state) => state.seat.seatSelected);
  const seatQuantity = useSelector((state) => state.seat.seatQuantity);

  // Check if the travelSelected object is empty
  const isTravelSelectedEmpty = Object.keys(travelSelected).length === 0;

  // Check if the required number of seats have been selected
  const areSeatsSelected = seatSelected.length == seatQuantity;

  // Determine whether the button should be disabled
  const isButtonDisabled =
    location.pathname === '/ticket/seats'
      ? !areSeatsSelected
      : isTravelSelectedEmpty;

  //   TODO: agregar mas casos mientras vayamos agregando vistas
  function handleClick() {
    switch (location.pathname) {
      case '/ticket':
        if (!isTravelSelectedEmpty) navigate('/ticket/seats');
        break;
      case '/ticket/seats':
        if (areSeatsSelected) {
          navigate('/ticket/passengers');
        }
        break;
      default:
        break;
    }
  }

  return (
    <button
      className={`bg-[#D97706] px-5 rounded-[40px] h-11 flex items-center w-40 justify-center font-semibold text-white tracking-tight ${isButtonDisabled ? 'cursor-not-allowed bg-gray-600' : ''}`}
      onClick={() => handleClick()}
      disabled={isButtonDisabled}
    >
      Continuar
    </button>
  );
}

export default ContinueButton;
