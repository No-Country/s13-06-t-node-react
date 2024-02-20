import Bus from '../../assets/Itinerary/bus.svg';
import Arrow from '../../assets/Itinerary/arrow.svg';
import ItinerarySchedule from './ItinerarySchedule.jsx';

// data from endpoint
const schedule = {
  departingPlace: 'Buenos Aires',
  departingDay: 'Jue 14 Mar',
  departingHour: '08:00',
  arrivalPlace: 'Mar del Plata',
  arrivalDay: 'Jue 14 Mar',
  arrivalHour: '12:00',
  price: '00.000',
  typeOfTravel: 'Viaje de ida'
};

function Itinerary() {
  return (
    <div className='text-center mt-24'>
      <section className='bg-[#DEE5ED] h-[401px] max-w-80 rounded-[10px] px-4 pt-5 pb-8 mx-auto'>
        <h1 className='font-bold text-xl tracking-tight mb-9 text-[#1A202C]'>
          {schedule.typeOfTravel}
        </h1>

        <div className='flex justify-between font-medium text-[#486284] text-[15px] opacity-90 tracking-tight mb-[10px]'>
          <h2>Salida</h2> <h2>Llegada</h2>
        </div>
        <div className='flex justify-between font-medium text-xl tracking-tight items-center text-[#1A202C] mb-3'>
          <p>{schedule.departingPlace}</p>
          <img src={Arrow} className='size-5 mx-2' alt='Flecha'></img>
          <p>{schedule.arrivalPlace}</p>
        </div>
        <ItinerarySchedule
          departingDay={schedule.departingDay}
          arrivalDay={schedule.arrivalDay}
          arrivalHour={schedule.arrivalHour}
          departingHour={schedule.departingHour}
        />
        <img src={Bus} className='mx-auto mt-7 mb-14' alt='Icono de Autobus' />
        <h1 className='font-bold text-xl text-[#1A202C] text-left'>
          ${schedule.price} -
        </h1>
      </section>
    </div>
  );
}

export default Itinerary;
