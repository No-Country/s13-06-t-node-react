import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home.jsx';
import MainLayout from './layouts/MainLayout.jsx';
import StepsLayout from './layouts/StepsLayout.jsx';
import SeatSelection from './pages/SeatSelection.jsx';
import TravelSelection from './pages/TravelSelection.jsx';
import TripReservation from './pages/ticket/TripReservation.jsx';
import UserLayout from './layouts/UserLayout.jsx';
import MyPurchases from './pages/auth/user/MyPurchases.jsx';
import UserSettings from './pages/auth/user/UserSettings.jsx';
import UserTravelDistance from './pages/auth/user/UserTravelDistance.jsx';

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
        element: <p>Summary</p>
      },
      {
        path: 'payment',
        element: <p>Payment</p>
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
  }
]);

export default router;
