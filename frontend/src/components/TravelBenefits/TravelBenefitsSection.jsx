import beneficio from '../../assets/TravelBenefitsSection/beneficio.jpg';
import digital_tickets from '../../assets/TravelBenefitsSection/digital_tickets.svg';
import notifications from '../../assets/TravelBenefitsSection/notifications.svg';
import service_quality from '../../assets/TravelBenefitsSection/service_quality.svg';
import regular_passenger from '../../assets/TravelBenefitsSection/regular_passenger.svg';

const TravelBenefitsSection = () => {
  return (
    <div className='flex flex-col items-center h-auto w-full gap-8 lg:p-10 text-color-dark cursor-default'>
      <h2 className='lg:text-5xl text-3xl px-4 uppercase font-medium text-midnight-slate text-center tracking-tight'>
        ¿Por qué viajar con nosotros?
      </h2>
      <p className='lg:w-5/12 w-full px-4 text-lg font-normal text-center'>
        Viaja con nosotros y disfruta de seguridad, comodidad y confiabilidad en
        cada destino.
      </p>

      <div className='lg:flex px-3 h-4/6 w-full justify-evenly items-center'>
        <img
          className='lg:h-full h-auto lg:max-w-xl max-w-screen rounded-lg'
          src={beneficio}
          alt='placeholder'
        />
        <div className='lg:w-2/6 gap-6 pt-4 lg:pt-0 px-1 flex flex-col justify-between '>
          <div className='flex h-3/12 gap-[18px]'>
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
              <p className='font-semibold lg:text-[22px] text-base pb-1'>
                Tickets digitales
              </p>
              <p>
                Ya no necesitas imprimir, presenta tu ticket digital al chofer
                antes de ingresar al bus.
              </p>
            </div>
          </div>
          <div className='flex h-3/12 gap-[18px]'>
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
              <p className='font-semibold lg:text-[22px] text-base pb-1'>
                Nuestros destinos
              </p>
              <p>
                Te ofrecemos una amplia gama de destinos para que vos elijas
                adonde querés llegar.
              </p>
            </div>
          </div>
          <div className='flex h-3/12 gap-[18px]'>
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
                <p className='font-semibold lg:text-[22px] text-base pb-1'>
                  Comodidad
                </p>
              </div>

              <p>
                Butacas más anchas y mayor distancia entre asientos , las
                unidades cuentan con aire acondicionado, calefacción central,
                minibar, video y baño.
              </p>
            </div>
          </div>
          <div className='flex h-3/12 gap-[18px]'>
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
              <p className='font-semibold lg:text-[22px] text-base pb-1'>
                Club de pasajeros frecuentes
              </p>
              <p>
                Descubre todas las alternativas para canjear tus kilómetros que
                te entrega Ticket Bus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelBenefitsSection;
