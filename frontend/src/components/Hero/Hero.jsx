const Hero = () => {
  return (
    <div className='flex flex-col sm:pt-0 md:flex-row items-center m-8 md:mr-0 '>
      <div className='sm:mt-10 text-left p-8 md:p-24 md:mb-9 md:mt-0  '>
        <p className='font-semibold my-4'>
          ¡Hacemos de tu viaje una experiencia más cómoda!
        </p>
        <h1 className='font-semibold text-3xl md:text-5xl my-4'>
          ¡ENCUENTRA TU MEJOR PASAJE EN BUS!
        </h1>
        <p>
          Bienvenido a nuestro servicio de autobuses, donde te ofrecemos viajes
          seguros, cómodos y confiables a una variedad de destinos. Descubre una
          nueva forma de viajar con nosotros y experimenta el confort en cada
          trayecto.
        </p>
      </div>
      <div>
        <img
          className='rounded-tl-[100px] md:rounded-tl-[100px] w-[1900px]'
          src='https://s3-alpha-sig.figma.com/img/c519/9ac8/52c7f7a9d73df100b25e1c6e91409807?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SXBbTDn5dPuxHlS3wz6QkVJKbdKBz2nzi5SFkSTMQD0NFN6KkMso5aWu72XkR2vShhXuq5Qbh4NiVquqeXTxR~SOnhrHZA2U10d5Wu21dD~VgssEIc2eWNirG24GCNtmBmGwW77Onb0Rvti9CAy2Ymqz5WWvgnp3TsSXBT732iMHwISc3LpaZUh87CwcGzVDlfNaMxefJcr3YQI9NeL-upUaRJtbg9yJaI~5SPvpl4nys0XTiC4bqNSoVtLuQCQCfCeaHYUrWFYp8yffb8qW5yYhbkryVeeVN1PgYqqHn8CFnLDFeNFP8LoNmwCEQdpUtQtHC93n4iGuiWL7YWwrFw__'
          alt=''
        />
      </div>
    </div>
  );
};

export default Hero;
