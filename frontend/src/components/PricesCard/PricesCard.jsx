import PriceList from './PriceList.jsx';
import SeatLegendList from './SeatLegendList.jsx';

function PricesCard() {
  return (
    <div className='bg-[#DEE5ED]  md:h-[401px] rounded-[10px] px-10 pt-6 pb-7 mt-4 md:mt-24 w-full'>
      <PriceList />
      <SeatLegendList />
    </div>
  );
}

export default PricesCard;
