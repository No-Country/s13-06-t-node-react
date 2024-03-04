import promoImage from '../../assets/BenefitPictures/promo-2.webp';
import secondPromoImage from '../../assets/BenefitPictures/promo-1.webp';

export const BenefitPictures = () => {
  return (
    <div className='flex justify-center items-center md:p-16 p-9 gap-8 bg-[#F3F3F3] mt-28 mb-12'>
      <img
        className='rounded-lg w-full md:w-1/2 hidden md:block'
        src={promoImage}
        alt='Sumate al Club de Pasajeros'
      />
      <img
        className=' rounded-lg w-full md:w-1/2'
        src={secondPromoImage}
        alt='3 cuotas sin interés'
      />
    </div>
  );
};

export default BenefitPictures;
