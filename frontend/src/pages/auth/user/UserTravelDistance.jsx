import img1 from '../../../assets/UserDistance/img1.png';
import img2 from '../../../assets/UserDistance/img2.png';

function UserTravelDistance() {
  const totalKms = 100;
  const kms = 35;
  const progress = (kms / totalKms) * 100;

  return (
    <div className=' flex justify-center '>
      <div className='flex flex-col md:flex-row justify-around w-full items-center mt-8 max-w-screen-2xl'>
        <div className='mt-5 md:mt-0 relative hidden md:block'>
          <img src={img1} alt='' />
          <span className='font-extrabold text-lg text-white absolute bottom-3 left-5'>
            ¡Convierte tus kilómetros en un cupón de descuento!
          </span>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <h2 className='font-bold text-3xl'>Kilómetros acumulados</h2>
          <h3 className='font-normal text-3xl text-[#566E8D]'>
            Tu saldo en kilómetros es
          </h3>
          <p className='my-5'>
            <span className='text-8xl font-extrabold text-[#84BCDA]'>
              {kms}
            </span>{' '}
            kms
          </p>

          <div className='relative w-full h-4 bg-gray-200 rounded-md'>
            <div
              className='absolute top-0 left-0 h-full bg-[#38A169] '
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className='mt-3'>
            Te faltan {totalKms - kms} kilómetros para crear un cupón de
            descuento
          </p>
          <button className='bg-[#84BCDA] hover:bg-[#a9cee2] px-8 py-1 rounded-md text-white mt-8'>
            Crear cupón
          </button>
        </div>
        <div className='mt-5 md:mt-0 relative'>
          <img src={img2} alt='' />
          <span className='font-extrabold text-lg text-white absolute bottom-3 left-3'>
            ¡Mientras más viajas más ganas!
          </span>
        </div>
      </div>
    </div>
  );
}

export default UserTravelDistance;
