import bus from '../../assets/bus-icon.svg';
import arrow from '../../assets/arrow.svg';
import Schedule from './Schedule';
import BackButton from '../BackButton';
import ContinueButton from '../ContinueButton';
import MapRoute from '../MapRoute/MapRoute';

export default function ChooseTravel() {
  return (
    <div className='bg-background-light flex-grow w-full relative'>
      <div className='h-full mx-auto lg:max-w-screen-xl p-4 overflow-hidden'>
        <div className='flex items-center justify-between gap-12  md:flex-row flex-col md:mx-0 mx-2 mt-6'>
          <div className=' w-full md:w-3/5'>
            <div className='flex  my-7'>
              <img src={bus} alt='' className='mr-5' />
              <div>
                <h2 className='font-bold text-xl tracking-tight'>
                  Elige tu viaje de ida
                </h2>
                <p className='flex gap-4 justify-center text-[#486284] font-medium'>
                  Buenos Aires <img src={arrow} alt='' /> Mar del Plata
                </p>
              </div>
            </div>

            <div>
              <p className='font-semibold text-xl mb-4'>
                Jueves 14 de Marzo 2024{' '}
              </p>
              <Schedule
                departure={'8:00PM'}
                arrival={'12:45PM'}
                origin={'Buenos Aires'}
                destination={'Mar del Plata'}
              />
              <Schedule
                departure={'12:00PM'}
                arrival={'4:45AM'}
                origin={'Mar del Plata'}
                destination={'Buenos Aires'}
              />
            </div>
            <div className='flex justify-between mt-5'>
              <BackButton />
              <ContinueButton />
            </div>
          </div>
          <div className='lg:w-2/5 w-full'>
            {/* Actualizar para obtener las coordenadas del store segun la ruta seleccionada [latitud, longitud] */}
            <MapRoute
              origin={[-58.3816, -34.6037]}
              destination={[-57.5575, -38.0023]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
