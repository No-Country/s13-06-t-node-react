import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home.jsx';
import MainLayout from './layouts/MainLayout.jsx';
import StepsLayout from './layouts/StepsLayout.jsx';
import SeatSelection from './pages/SeatSelection.jsx';
import TravelSelection from './pages/TravelSelection.jsx';
import TripReservation from './pages/ticket/TripReservation.jsx';

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
  }
]);

export default router;
