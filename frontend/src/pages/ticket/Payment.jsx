import ArrowRightSVG from '../../assets/TravelHeader/Arrow Right.svg';
import BackButton from '../../components/BackButton';
import CreditCardForm from '../../components/CreditCardForm/CreditCardForm';
import TripDetailsCard from '../../components/TripDetailsCard';

function Payment() {
  return (
    <main className='bg-[#EFF0F0] flex-grow w-full relative'>
      <div className='h-full mx-auto lg:max-w-screen-xl p-4 overflow-hidden'>
        <div className='grid lg:grid-cols-4 md:grid-cols-5 sm:grid-cols-5 grid-cols-1 h-full lg:gap-4 gap-2 mx-auto relative'>
          {/* Columna 1 */}
          <div className='lg:col-span-1 md:col-span-2 sm:col-span-2 col-span-1 relative order-2 sm:order-1'>
            <TripDetailsCard
              title='Viaje de Ida'
              startLocation='Buenos Aires'
              endLocation='Mar del Plata'
              arrowImage={ArrowRightSVG}
              departureDate='Jueves 14 Mar'
              arrivalDate='Jueves 14 Mar'
              startTime='08:00'
              endTime='12:00'
            />
            <TripDetailsCard
              title='Viaje de Regreso'
              startLocation='Buenos Aires'
              endLocation='Mar del Plata'
              arrowImage={ArrowRightSVG}
              departureDate='Jueves 14 Mar'
              arrivalDate='Jueves 14 Mar'
              startTime='08:00'
              endTime='12:00'
            />
            <div className='flex md:justify-center'>
              <BackButton />
            </div>
          </div>

          {/* Columna 2 */}
          <div className='lg:col-span-2 md:col-span-2 sm:col-span-2 col-span-1 relative order-1 md:order-2'>
            <CreditCardForm />
          </div>

          {/* Columna 3 */}
          <div className='md:col-span-1 sm:col-span-1 col-span-1 relative order-last'></div>
        </div>
      </div>
    </main>
  );
}

export default Payment;
