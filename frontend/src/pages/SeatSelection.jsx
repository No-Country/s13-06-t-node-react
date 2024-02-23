import Itinerary from '../components/Itinerary/Itinerary.jsx';
import Seats from '../components/Seats/Seats.jsx';
import PricesCard from '../components/PricesCard/PricesCard.jsx';
import BackButton from '../components/BackButton.jsx';
import ContinueButton from '../components/ContinueButton.jsx';
import { useSelector } from 'react-redux';
import Schedule from '../components/ChooseTravel/Schedule.jsx';

function SeatSelection() {
  const seatQuantity = useSelector((state) => state.seat.seatQuantity);

  return (
    <main className='flex px-10 justify-between pt-8 max-w-[1440px] mx-auto flex-col md:flex-row items-center'>
      <div className='md:flex flex-col justify-between items-center  hidden '>
        <Itinerary />
        <div className='mt-6'>
          <BackButton />
        </div>
      </div>
      <Seats tickets={seatQuantity} />
      <div className='flex flex-col justify-between items-center '>
        <PricesCard />
        <div className='md:hidden mt-2 '>
          <Schedule
            departure={'12:00PM'}
            arrival={'4:45AM'}
            origin={'Mar del Plata'}
            destination={'Buenos Aires'}
          />
        </div>

        <div className='hidden md:block mt-6'>
          <ContinueButton />
        </div>
      </div>
      <div className='flex justify-between mt-5 w-full  md:hidden'>
        <BackButton />
        <ContinueButton />
      </div>
    </main>
  );
}

export default SeatSelection;
