import ArrowRightSVG from '../../../../assets/TravelHeader/Arrow Right.svg';
import BusIcon from '../../../../assets/BusTripDetails/Bus.svg';
import SeatIcon from '../../../../assets/BusTripDetails/Seat.svg';
import TripDetailsHeader from '../atoms/TripDetailsHeader';
import HorizontalLabelPair from '../atoms/HorizontalLabelPair';
import LocationArrowRow from '../molecules/LocationArrowRow';
import TimeRange from '../atoms/TimeRange';
import Divider from '../atoms/Divider';
import BusPrice from '../atoms/BusPrice';
import BusSeatInfo from '../molecules/BusSeatInfo';
import ServiceLabel from '../atoms/ServiceLabel';
import BackButton from '../atoms/BackButton';
import ContinueButton from '../atoms/ContinueButton';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function BusTripDetails() {
  const seatQuantity = useSelector((state) => state.seat.seatQuantity); //cantidad de pasajeros

  const seatData = [
    { seatNumber: 10, isActive: true },
    { seatNumber: 9, isActive: false },
    { seatNumber: 7, isActive: false },
    { seatNumber: 8, isActive: false }
  ];

  // Filtrar el array seatData para obtener solo la cantidad deseada según seatQuantity
  const filteredSeatData = seatData.slice(0, seatQuantity);

  const location = useLocation();

  useEffect(() => {
    const ajustarAlturaYMargen = () => {
      const container = document.getElementById('container');
      if (!container) return;

      const testingHeight = container.offsetHeight;
      const bottomPosition = testingHeight - 58;

      // Seleccionar todos los elementos con la clase ".bottom-md"
      const bottomMdElements = document.querySelectorAll('.bottom-md');
      bottomMdElements.forEach((bottomMdElement) => {
        bottomMdElement.style.bottom = `${bottomPosition}px`;
      });
    };

    // Llama a la función de ajuste cuando cambia la ubicación de la página
    ajustarAlturaYMargen();
  }, [location]);

  return (
    <div className='flex flex-col h-full'>
      <div className='mb-3 md:h-16'></div>
      <div>
        <div className='bg-ethereal-frost sm:bg-[#DEE5ED] rounded-md p-3 flex flex-col'>
          <TripDetailsHeader title='Viaje de Ida' />

          <HorizontalLabelPair leftLabel='Salida' rightLabel='Llegada' />
          <div className='grid grid-cols-3'>
            <div className='col-span-3'>
              <LocationArrowRow
                startLocation='Buenos Aires'
                endLocation='Mar del Plata'
                arrowImage={ArrowRightSVG}
              />
            </div>
          </div>

          <HorizontalLabelPair
            leftLabel='Jueves 14 Mar'
            rightLabel='Jueves 14 Mar'
          />

          <TimeRange startTime='08:00' endTime='12:00' />

          <Divider />

          <BusPrice BusIcon={BusIcon} price='00.00-' />
        </div>
        <div className='bg-[#DEE5ED] rounded-md p-3 flex flex-col mt-2'>
          <BusSeatInfo SeatIcon={SeatIcon} seatData={filteredSeatData} />

          <Divider />

          <ServiceLabel text='Servicio CAMA' />
        </div>
      </div>
      <div
        className='bg-transparent rounded-md p-3 flex-1 mt-2 bg-black'
        id='container'
      >
        <div className='h-full flex sm:flex-col flex-row items-center md:justify-center justify-between flex-wrap'>
          <BackButton to='/ticket/seats' />

          <ContinueButton to='/ticket/summary' label='Continuar' />
        </div>
      </div>
    </div>
  );
}

export default BusTripDetails;
