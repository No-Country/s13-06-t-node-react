import placeholder from '../../assets/TravelBenefitsSection/placeholder.webp';
import digital_tickets from '../../assets/TravelBenefitsSection/digital_tickets.svg';
import notifications from '../../assets/TravelBenefitsSection/notifications.svg';
import service_quality from '../../assets/TravelBenefitsSection/service_quality.svg';
import regular_passenger from '../../assets/TravelBenefitsSection/regular_passenger.svg';

const TravelBenefitsSection = () => {
  return (
    <div className='flex flex-col items-center h-auto w-full gap-8 lg:p-10 text-[#1A202C] cursor-default'>
      <h2 className='lg:text-5xl text-3xl px-4 font-medium text-[#486284] text-center '>
        ¿Por qué viajar con nosotros?
      </h2>
      <p className='lg:w-5/12 w-full px-4 text-lg font-normal text-center'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore e
      </p>

      <div className='lg:flex px-3 h-4/6 w-full justify-evenly items-center'>
        <img
          className='lg:h-full h-auto lg:max-w-xl max-w-screen rounded-lg'
          src={placeholder}
          alt='placeholder'
        />
        <div className='lg:w-2/6 gap-6 pt-4 lg:pt-0 px-1 flex flex-col justify-between '>
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
              <p className='font-semibold lg:text-[22px] text-base'>
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
            <div>
              <p className='font-semibold lg:text-xl text-base'>
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
              <div>
                <p className='font-semibold lg:text-[22px] text-base '>
                  <span className='text-[#605BFF]'>Calidad</span> del servicio
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
              <p className='font-semibold lg:text-[22px] text-base'>
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
