import ItineraryPurchases from './ItineraryPurchases';

function MyPurchases() {
  return (
    <main className=' flex justify-center'>
      <div className='flex items-center  flex-col  md:w-[70%]'>
        <div className='self-start my-8'>
          <p className='font-bold text-3xl text-left'>Historial de Compras</p>
        </div>

        <ItineraryPurchases
          date={'14 de enero'}
          departure={'12:00PM'}
          arrival={'4:45AM'}
          origin={'Mar del Plata'}
          destination={'Buenos Aires'}
        />
      </div>
    </main>
  );
}

export default MyPurchases;
