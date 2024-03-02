import { useState } from 'react';
import mercadoPagoLogo from '../../assets/PaymentMethod/mercadoPagoLogo.svg';
import masterCard from '../../assets/PaymentMethod/masterCard.svg';
import visaCard from '../../assets/PaymentMethod/visaCard.svg';

export const PaymentMethod = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);

  const handleMethodChange = (event) => {
    setSelectedMethod(event.target.value);
    console.log(selectedMethod);
  };
  return (
    <>
      <div className='bg-[#DEE5ED] rounded-lg md:w-80 h-16 mb-4 flex justify-around items-center p-4'>
        <input
          type='radio'
          name='paymentMethod'
          value='mercadoPago'
          onChange={handleMethodChange}
          className='form-radio w-6 h-6 bg-[#EAF4FB] rounded-3xl border-2 border-black'
        />

        <label className='text-base leading-6'>Abonar con:</label>

        <span className='text-gray-700'>
          <img src={mercadoPagoLogo} alt='payment-method' className='' />
        </span>
      </div>

      <div className='bg-[#DEE5ED] rounded-lg md:w-80 h-24 flex justify-around items-center p-4'>
        <div className='flex flex-col items-center'>
          <input
            type='radio'
            name='paymentMethod'
            value='credito'
            onChange={handleMethodChange}
            className='form-radio w-6 h-6 bg-[#EAF4FB] rounded-3xl border-2 border-black mb-2'
          />

          <input
            type='radio'
            name='paymentMethod'
            value='debito'
            onChange={handleMethodChange}
            className='form-radio w-6 h-6 bg-[#EAF4FB] rounded-3xl border-2 border-black'
          />
        </div>

        <div className='flex flex-col'>
          <label className='text-base leading-6 mb-2'>Crédito</label>
          <label className='text-base leading-6'>Débito</label>
        </div>

        <div className='flex justify-center items-center'>
          <span className='text-gray-700'>
            <img src={masterCard} alt='payment-method' className='mr-5' />
          </span>
          <span className='text-gray-700'>
            <img src={visaCard} alt='payment-method' className='w-14 h-9' />
          </span>
        </div>
      </div>
    </>
  );
};