import UserSVG from '../../../../assets/TravelHeader/User.svg';
import LogoTravel from '../atoms/LogoTravel';
import TripLink from '../atoms/TripLink';
import TripDetails from '../molecules/TripDetails';
import AccountButton from '../atoms/AccountButton';
import RegisterButton from '../atoms/RegisterButton';
import imagePage from '../../../../assets/Logo/logo-horizontal.svg';
function TravelHeader() {
  function loginHandler() {
    console.log('Hello world');
  }

  return (
    <div className='daisy-navbar bg-ethereal-frost sm:bg-ocean-blue sm:border-midnight-slate sm:border-2 lg:px-5 py-4 grid  md:grid-cols-12 sm:grid-cols-7 grid-cols-4'>
      <div className='hidden md:flex items-center lg:col-span-1 md:col-span-2 lg:px-4 '>
        <LogoTravel imagePath={imagePage} />
      </div>
      <TripLink link='/#' text='Mi Viaje' />
      <div className='lg:col-span-6 h md:col-span-8 sm:col-span-5 col-span-3 sm:flex grid grid-cols-2 md:text-base text-xs gap-2'>
        <TripDetails />
      </div>
      <div className='hidden lg:flex md:flex-1 items-center justify-center col-span-3 '>
        <RegisterButton text='Registrarme' onClick={loginHandler} />
        <AccountButton
          iconSrc={UserSVG}
          iconAlt='User'
          buttonText='Mi Cuenta'
          onClick={loginHandler}
        />
      </div>
    </div>
  );
}

export default TravelHeader;
