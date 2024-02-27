import PromoImageLg from '../../../../assets/PromoRegister/promo-lg.jpg';
import PromoImageXs from '../../../../assets/PromoRegister/promo-xs.jpg';
import ResponsiveImage from '../atoms/ResponsiveImage';
import SignUpSection from '../molecules/SignUpSection';

function PromoRegister() {
  return (
    <div className='relative w-full h-full'>
      {/* Desktop */}

      <ResponsiveImage
        src={PromoImageLg}
        alt='Promotional Image'
        className='sm:block hidden w-full h-full object-cover'
      />

      {/* Mobile */}

      <ResponsiveImage
        src={PromoImageXs}
        alt='Promotional Image'
        className='sm:hidden w-full h-full object-cover'
      />

      {/* Para Mobile */}
      <div className='sm:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:w-full w-60 lg:p-6 sm:p-2 sm:mb-2'>
        <div className='flex flex-col items-center justify-center'>
          <SignUpSection
            title='Regístrate ahora y ahorra tiempo en cada compra'
            buttonText='Register'
            buttonHref='/register'
          />
        </div>
      </div>
    </div>
  );
}

export default PromoRegister;
