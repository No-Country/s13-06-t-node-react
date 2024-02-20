import Itinerary from '../components/Itinerary/Itinerary.jsx';
import Seats from '../components/Seats/Seats.jsx';
import PricesCard from '../components/PricesCard/PricesCard.jsx';
import BackButton from '../components/BackButton.jsx';
import ContinueButton from '../components/ContinueButton.jsx';

function SeatSelection() {
  return (
    <main className='flex px-20 justify-between pt-8 max-w-[1440px] mx-auto'>
      <div className='flex flex-col justify-between items-center space-y-20'>
        <Itinerary />
        <BackButton />
      </div>
      <Seats tickets={1} />
      <div className='flex flex-col justify-between items-center space-y-20'>
        <PricesCard />
        <ContinueButton />
      </div>
    </main>
  );
}

export default SeatSelection;
