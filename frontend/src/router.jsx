import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home.jsx';
import MainLayout from './layouts/MainLayout.jsx';
import StepsLayout from './layouts/StepsLayout.jsx';
import TravelSelection from './pages/TravelSelection.jsx';
import TripReservation from './pages/ticket/TripReservation.jsx';
// import Register from './pages/auth/Register.jsx';
import RegisterAlt from './pages/auth/RegisterAlt.jsx';
import Payment from './pages/ticket/Payment.jsx';
import UserLayout from './layouts/UserLayout.jsx';
import MyPurchases from './pages/auth/user/MyPurchases.jsx';
import UserSettings from './pages/auth/user/UserSettings.jsx';
import UserTravelDistance from './pages/auth/user/UserTravelDistance.jsx';
import Summary from './pages/ticket/Summary.jsx';
import SeatSelection from './pages/ticket/SeatSelection.jsx';
import LoginForm from './components/Login/LoginForm.jsx';
import AdminLayout from './layouts/AdminLayout.jsx';
import CreateRoute from './components/Admin/components/CreateRoute.jsx';
import HomeAdmin from './pages/auth/admin/HomeAdmin.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  },
  {
    path: '/ticket',
    element: <StepsLayout />,
    children: [
      {
        index: true,
        element: <TravelSelection />
      },
      {
        path: 'seats',
        element: <SeatSelection />
      },
      {
        path: 'passengers',
        element: <TripReservation />
      },
      {
        path: 'summary',
        element: <Summary />
      },
      {
        path: 'payment',
        element: <Payment />
      }
    ]
  },
  {
    path: '/user',
    element: <UserLayout />,
    children: [
      {
        path: 'purchases',
        element: <MyPurchases />
      },
      {
        path: 'settings',
        element: <UserSettings />
      },
      {
        path: 'travel-distance',
        element: <UserTravelDistance />
      }
    ]
  },
  {
    path: '/register',
    element: <RegisterAlt />
  },
  {
    path: '/login',
    element: <LoginForm />
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <HomeAdmin /> //Principal
      },
      {
        path: 'createTerminal',
        element: <SeatSelection />
      },
      {
        path: 'createRoute',
        element: <CreateRoute />
      },
      {
        path: 'myRoutes',
        element: <Summary />
      },
      {
        path: 'myTerminals',
        element: <Payment />
      }
    ]
  }
]);

export default router;
