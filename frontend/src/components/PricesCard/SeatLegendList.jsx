import SeatLegendRow from './SeatLegendRow.jsx';
import usb from '../../assets/PricesCard/usb.svg';
import snowflake from '../../assets/PricesCard/snowflake.svg';
import tv from '../../assets/PricesCard/tv.svg';
import reclinable from '../../assets/PricesCard/reclinable.svg';

function SeatLegendList() {
  return (
    <div className='md:mt-9 flex md:flex-col justify-between items-center a'>
      <div className='md:ml-6 flex flex-col gap-5 md:mb-4'>
        <SeatLegendRow colorClass='bg-[#FFCC00]' text='Disponible' />
        <SeatLegendRow colorClass='bg-[#808393]' text='Ocupado' />
        <SeatLegendRow colorClass='bg-[#FF5F00]' text='Seleccionado' />
      </div>
      <div className='flex md:flex-row md:mt-5  md:gap-6 gap-3 justify-center flex-col bg-[#D9D9D9] md:bg-transparent px-9 py-3 md:p-0 rounded-lg'>
        <img src={usb} /> <img src={snowflake} /> <img src={tv} />{' '}
        <img src={reclinable} />
      </div>
    </div>
  );
}

export default SeatLegendList;
