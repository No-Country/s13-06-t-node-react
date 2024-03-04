import Itinerary from '../../components/Itinerary/Itinerary.jsx';
// import Seats from '../components/Seats/Seats.jsx';
// import PricesCard from '../components/PricesCard/PricesCard.jsx';
import BackButton from '../../components/BackButton.jsx';
import { useSelector } from 'react-redux';

import ContinueButton from '../../components/ContinueButton.jsx';
import Seats from '../../components/Seats/Seats.jsx';
import PricesCard from '../../components/PricesCard/PricesCard.jsx';
import Schedule from '../../components/ChooseTravel/Schedule.jsx';
function SeatSelection() {
  const seatQuantity = useSelector((state) => state.seat.seatQuantity);

  return (
    <div className='bg-background-light flex-grow w-full relative'>
      <div className='h-full mx-auto lg:max-w-screen-xl p-4 overflow-hidden'>
        <div className='grid lg:grid-cols-4 md:grid-cols-5 sm:grid-cols-5 grid-cols-1 h-full lg:gap-4 gap-2 mx-auto relative'>
          {/* Columna 1 */}
          <div className='lg:col-span-1 hidden md:block md:col-span-2 sm:col-span-2 col-span-1 relative order-2 sm:order-1'>
            <Itinerary />

            <div className='hidden sm:block absolute  mt-5 left-1/2 transform -translate-x-1/2 bottom-md'>
              <BackButton />
            </div>
          </div>

          {/* Columna 2 */}

          <div className='lg:col-span-2 md:col-span-2 sm:col-span-2 mx-auto col-span-1 relative order-1 md:order-2'>
            <Seats tickets={seatQuantity} />
          </div>

          {/* Columna 3 */}
          <div className='md:col-span-1 sm:col-span-1 col-span-1 relative order-last'>
            <PricesCard />
            <div className='md:hidden mt-2 '>
              <Schedule
                departure={'12:00PM'}
                arrival={'4:45AM'}
                origin={'Mar del Plata'}
                destination={'Buenos Aires'}
              />
            </div>

            <div className='hidden sm:block absolute mt-5 left-1/2 transform -translate-x-1/2 bottom-md'>
              <ContinueButton
                label='Continuar'
                to='/ticket/passengers'
                disabled={false}
              />
            </div>
            <div className='flex justify-between mt-5 w-full   md:hidden'>
              <BackButton />
              <ContinueButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeatSelection;
