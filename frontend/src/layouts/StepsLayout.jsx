import { Outlet } from 'react-router-dom';
import { Steps } from '../components/Steps/Steps.jsx';
import { TravelHeader } from '../components/TravelHeader/index.jsx';
import Navbar from '../components/Navbar/Navbar.jsx';

function StepsLayout() {
  return (
    <div className='h-screen flex flex-col'>
      {/* TODO: queda un espacio entre md y lg donde falta,  */}
      <div className='md:hidden'>
        <Navbar />
      </div>
      <TravelHeader />
      <Steps />
      <Outlet />
    </div>
  );
}

export default StepsLayout;
