import placeholder from '../../assets/TravelBenefitsSection/placeholder.webp';
import digital_tickets from '../../assets/TravelBenefitsSection/digital_tickets.svg';
import notifications from '../../assets/TravelBenefitsSection/notifications.svg';
import service_quality from '../../assets/TravelBenefitsSection/service_quality.svg';
import regular_passenger from '../../assets/TravelBenefitsSection/regular_passenger.svg';

const TravelBenefitsSection = () => {
  return (
    <div className='flex flex-col items-center h-auto w-full gap-8 md:p-10 text-[#1A202C] '>
      <h2 className='md:text-5xl text-3xl px-4 font-medium text-[#486284] text-center '>
        ¿POR QUÉ VIAJAR CON NOSOTROS?
      </h2>
      <p className='lg:w-4/12 w-full px-4 text-lg font-normal text-center'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore e
      </p>

      <div className='md:flex px-3 h-4/6 w-full justify-evenly'>
        <img
          className='md:h-full h-auto md:max-w-xl max-w-screen'
          src={placeholder}
          alt='placeholder'
        />
        <div className='md:w-2/6 gap-6 pt-4 md:pt-0 px-1 flex flex-col justify-between '>
          <div className='flex h-3/12 gap-3'>
            <div className='flex justify-center items-center'>
              <div className='w-12 flex justify-center'>
                <img
                  src={digital_tickets}
                  alt='digital_tickets'
                  width={61}
                  height={80}
                />
              </div>
            </div>
            <div className='flex flex-col justify-between'>
              <p className='font-semibold md:text-[22px] text-base hover:text-blue-500 md:w-max cursor-pointer transition-all active:text-blue-400'>
                Tickets digitales
              </p>
              <p>
                Aliquam erat volutpat. Integer malesuada turpis id fringilla
                suscipit. Maecenas ultrices.
              </p>
            </div>
          </div>
          <div className='flex h-3/12 gap-3'>
            <div className='flex justify-center items-center'>
              <div className='w-12 flex justify-center'>
                <img
                  src={notifications}
                  alt='notifications'
                  width={72}
                  height={69}
                />
              </div>
            </div>
            <div className='overflow-auto'>
              <p className='font-semibold md:text-[22px] text-base hover:text-blue-500 md:w-max cursor-pointer transition-all active:text-blue-400'>
                Alertas y notificaciones en tiempo real
              </p>
              <p>
                Aliquam erat volutpat. Integer malesuada turpis id fringilla
                suscipit. Maecenas ultrices.
              </p>
            </div>
          </div>
          <div className='flex h-3/12 gap-3'>
            <div className='flex justify-center items-center'>
              <div className='w-12 flex justify-center'>
                <img
                  src={service_quality}
                  alt='service_quality'
                  width={47}
                  height={55}
                />
              </div>
            </div>
            <div>
              <div className='group hover:text-blue-500 active:text-blue-400 transition-all md:w-max'>
                <p className='font-semibold md:text-[22px] text-base md:w-max cursor-pointer'>
                  <span className='text-[#605BFF] group-hover:text-blue-500 group-active:text-blue-400'>
                    Calidad
                  </span>{' '}
                  del servicio
                </p>
              </div>

              <p>
                Aliquam erat volutpat. Integer malesuada turpis id fringilla
                suscipit. Maecenas ultrices.
              </p>
            </div>
          </div>
          <div className='flex h-3/12 gap-3'>
            <div className='flex justify-center items-center'>
              <div className='w-12 flex justify-center'>
                <img
                  src={regular_passenger}
                  alt='regular_passenger'
                  width={68}
                  height={75}
                />
              </div>
            </div>
            <div>
              <p className='font-semibold md:text-[22px] text-base hover:text-blue-500 md:w-max cursor-pointer transition-all active:text-blue-400'>
                Club de pasajeros frecuentes
              </p>
              <p>
                Aliquam erat volutpat. Integer malesuada turpis id fringilla
                suscipit. Maecenas ultrices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelBenefitsSection;
