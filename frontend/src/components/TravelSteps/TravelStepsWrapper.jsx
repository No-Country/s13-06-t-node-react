import DestinoLogo from '../../assets/TravelSteps/destino.svg';
import ServicioLogo from '../../assets/TravelSteps/servicio.svg';
import ArriboLogo from '../../assets/TravelSteps/arribo.svg';
import Linea from '../../assets/TravelSteps/linea.svg';
import TravelStepsCard from './TravelStepsCard.jsx';
import TravelStepsHeader from './TravelStepsHeader.jsx';

function TravelStepsWrapper() {
  return (
    <section className='my-16 text-color-dark max-w-[1440px] mx-auto'>
      <TravelStepsHeader
        title='Viaja en simples pasos (!)'
        description='La forma más fácil de comprar pasajes online.
        '
      />
      <div className='flex text-center justify-between px-20 relative'>
        <TravelStepsCard
          logo={DestinoLogo}
          title='Selecciona la ciudad'
          description='Elige el lugar de origen y destino para tu viaje en autobús.'
        />

        <img
          src={Linea}
          className='hidden lg:block absolute -z-10 xl:top-4 xl:left-56 xl:size-4/12 lg:left-64 lg:top-8 lg:size-3/12'
        />

        <TravelStepsCard
          logo={ServicioLogo}
          title='Elige el servicio y horario'
          description='Selecciona tus horarios y asientos deseados.'
        />

        <img
          src={Linea}
          alt='Logo de una persona llevando una valija'
          className='hidden lg:block absolute -z-10 xl:top-4 xl:right-56 xl:size-4/12 lg:right-64 lg:top-8 lg:size-3/12'
        />

        <TravelStepsCard
          logo={ArriboLogo}
          title='Recibi tu  boleto digital'
          description='Recibe la confirmación de tu boleto y los detalles del viaje.'
        />
      </div>
    </section>
  );
}

export default TravelStepsWrapper;
