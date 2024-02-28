import { Outlet } from 'react-router-dom';
import UserNavbar from '../components/UserNavbar/UserNavbar.jsx';
import UserHeader from '../components/UserHeader/UserHeader.jsx';
import UserRoutes from '../components/UserRoutes/UserRoutes.jsx';

function UserLayout() {
  return (
    <div className='h-screen flex flex-col'>
      <UserNavbar />
      <UserHeader />
      <UserRoutes />
      <Outlet />
    </div>
  );
}

export default UserLayout;
