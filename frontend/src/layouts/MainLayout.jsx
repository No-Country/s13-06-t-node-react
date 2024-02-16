import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer.jsx';

function MainLayout() {
  return (
    <>
      HEADER
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
