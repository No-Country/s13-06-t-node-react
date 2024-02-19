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
  price: '00.000'
};

function Itinerary() {
  return (
    // TODO: preguntar a UX-UI si esta bien hacer esta concesion con los max-w, max-w-[304px] queda demasiado cerca, max-w-80 lo deja respirar un poco mas
    <div className='text-center max-w-80'>
      <h1 className='font-medium text-xl tracking-tight mb-9 text-[#1A202C]'>
        Viaje de ida
      </h1>
      <section>
        <div className='bg-[#DEE5ED] max-w-80 min-h-96 rounded-[30px] px-4 pt-7 pb-8 mx-auto'>
          <img src={Bus} className='mx-auto mb-4' alt='Icono de Autobus' />
          <div className='flex justify-between font-medium text-[#486284] text-[15px] opacity-90 tracking-tight mb-[10px]'>
            <h2>Salida</h2> <h2>Llegada</h2>
          </div>
          <div className='flex justify-between font-medium text-xl tracking-tight items-center text-[#1A202C] mb-3'>
            <p>{schedule.departingPlace}</p>
            <img src={Arrow} className='size-5' alt='Flecha'></img>
            <p>{schedule.arrivalPlace}</p>
          </div>
          <ItinerarySchedule
            departingDay={schedule.departingDay}
            arrivalDay={schedule.arrivalDay}
            arrivalHour={schedule.arrivalHour}
            departingHour={schedule.departingHour}
          />
          <h1 className='font-bold text-xl text-[#1A202C] text-left'>
            ${schedule.price} -
          </h1>
        </div>
      </section>
    </div>
  );
}

export default Itinerary;
