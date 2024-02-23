import bed from '../../assets/PricesCard/bed.svg';

// data endpoint
const data = {
  price: 8000,
  seatType: 'Semi Cama'
};

function PriceList() {
  return (
    <div className='flex md:flex-col items-center gap-8 md:gap-1 md:text-center'>
      <div>
        <p className='md:pb-1 pb-0 font-bold text-xl text-[#1A202C] tracking-tight md:mb-3 mb-0'>
          Calidad del servicio
        </p>

        <p className='pb-7 text-[#A0A0A0] font-medium text-sm uppercase'>
          {data.seatType}
        </p>
      </div>

      <div>
        <img className='w-11 h-11' src={bed} />
      </div>
    </div>
  );
}

export default PriceList;
