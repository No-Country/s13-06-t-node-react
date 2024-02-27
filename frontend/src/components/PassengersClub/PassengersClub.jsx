import PropTypes from 'prop-types';
import Button from './Button';

export default function PassengersClub({ accumulatedKm, additionalKm }) {
  const totalKm = accumulatedKm + additionalKm;

  return (
    <div className='bg-[#DEE5ED] md:mt-16 m-0 p-3 rounded-lg flex flex-col justify-center '>
      <div className='bg-[#A3DEC2] mt-3 w-24 h-24 rounded-full hidden md:flex  justify-center overflow-hidden'>
        <img
          className='object-cover p-2 w-full h-full rounded-full '
          src='https://s3-alpha-sig.figma.com/img/d755/f100/7f9a4b47bcf29ae30f655d1b142debc4?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M3Yx99LJvR9aWhoymNaLGeL83aNTrYqWJhsWZoe6Ee4o3q9d-~D8RllgDSOklcFoCT3X-YxEuodRHv3oQUmiEAPqD19QN2yzHm1-7Z2td2AL3KF5jdjrLDu99z0HEvWjXlbFbdXwNFMZSSiNa0yDw6wtdMio3iG3wNjdgGfkTWaprCMigk0fEmhlZmRjVQ3~1ylQNxLEo4slWs-b7wHUbIzviBsQbSTx7~tD5DA15HpB~SfZil~SnagFlcIkRyBDidkZxjHelgQyfSep1-qGwpxledrIzVHym6XLJWjjr44DEb32k-Ky4JC-0uUDWyg1XSXOvtvfOWhI~10~e0UPHQ__'
          alt=''
        />
      </div>
      <div className='md:text-center pl-2 md:pl-0 mt-2 text-xl font-bold text-[#1A202C] md:pt-5'>
        Club de pasajeros
      </div>
      <p className='text-center mt-2 hidden md:flex text-base font-medium text-[#3A556A]'>
        Suma no solo kilómetros sino también historias que contar
      </p>
      <div className='hidden md:flex justify-between items-center w-full px-2 pt-12 border-b-[1px] pb-2 border-[#576F8E]'>
        <p className='text-base font-bold text-[#1A202C]'>KM acumulados</p>
        <p className='text-lg font-bold text-[#1A202C]'>{accumulatedKm}</p>
      </div>
      <div className='flex justify-between items-center w-full px-2 pt-2 border-b-[1px] pb-2 border-[#576F8E]'>
        <p className='text-base font-bold text-[#1A202C]'>KM a sumar</p>
        <p className='text-lg font-bold text-[#1A202C]'>+{additionalKm}</p>
      </div>
      <div className='flex justify-end w-full pt-2 px-2 gap-5 items-center'>
        <p className='text-base font-bold text-[#1A202C]'>Total: </p>
        <p className='text-lg font-bold text-[#1A202C]'>{totalKm}</p>
      </div>
      <div className='hidden md:flex'>
        <Button name={'Ver detalle'} />
      </div>
    </div>
  );
}

PassengersClub.propTypes = {
  accumulatedKm: PropTypes.number.isRequired,
  additionalKm: PropTypes.number.isRequired
};
