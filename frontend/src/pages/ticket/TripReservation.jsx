import { BusTripDetails } from '../../components/BusTripDetails';
import { PassengerForm } from '../../components/PassengerForm';
import PassengersClub from '../../components/PassengersClub/PassengersClub';

function TripReservation() {
  return (
    <div className='md:bg-[#CED7E4] bg-[#F1F1F1] flex-grow w-full'>
      <div className='h-full mx-auto lg:max-w-screen-xl p-4 overflow-hidden'>
        <div className='grid lg:grid-cols-4 md:grid-cols-5 sm:grid-cols-5 grid-cols-1 h-full lg:gap-4 gap-2 mx-auto'>
          {/* Columna 1 */}
          <div className='lg:col-span-1 md:col-span-2 sm:col-span-2 order-2 md:order-1'>
            <BusTripDetails />
          </div>

          {/* Columna 2 */}
          <div className='lg:col-span-2 md:col-span-2 sm:col-span-2 col-span-1 order-1 md:order-2'>
            <PassengerForm />
          </div>

          {/* Columna 3 */}
          <div className=' md:col-span-1  sm:col-span-1 col-span-1 order-last'>
            <PassengersClub />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TripReservation;
