import heroImage from '../../assets/Hero/hero-image.webp';

const Hero = () => {
  return (
    <div className='md:flex flex-col sm:pt-0 md:flex-row md:pl-16 pt-8 xl:pt-32 pb-0 md:mr-0 bg-[#D8ECF6] bg-opacity-50 h-[664px] hidden'>
      <div className='sm:mt-10 text-left md:pr-24 md:pt-24 xl:pt-0 md:pb-24 md:mb-9 md:mt-0 w-6/12'>
        <p className='font-semibold mb-4'>
          ¡Hacemos de tu viaje una experiencia más cómoda!
        </p>
        <h1 className='font-extrabold text-3xl md:text-5xl my-4'>
          ¡ENCUENTRA TU MEJOR PASAJE EN BUS!
        </h1>
        <p className='font-medium opacity-65'>
          Bienvenido a nuestro servicio de autobuses, donde te ofrecemos viajes
          seguros, cómodos y confiables a una variedad de destinos. Descubre una
          nueva forma de viajar con nosotros y experimenta el confort en cada
          trayecto.
        </p>
      </div>
      <div className='max-w-3xl w-7/12 self-end'>
        <img
          className='rounded-tl-[100px] w-full md:rounded-tl-[100px]'
          src={heroImage}
          alt=''
        />
      </div>
    </div>
  );
};

export default Hero;
