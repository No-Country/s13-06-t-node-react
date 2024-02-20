import PriceList from './PriceList.jsx';
import SeatLegendList from './SeatLegendList.jsx';

function PricesCard() {
  return (
    <div className='bg-[#DEE5ED] max-w-[304px] h-[401px] rounded-[10px] px-16 pt-6 pb-7 mt-24'>
      <PriceList />
      <SeatLegendList />
    </div>
  );
}

export default PricesCard;
