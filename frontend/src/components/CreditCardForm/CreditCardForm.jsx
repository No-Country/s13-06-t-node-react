import './CreditCardForm.css';
import SelectForm from './SelectForm';
import TextInput from './TextInput';
import creditCard from '../../assets/CreditCardForm/credit-card.svg';
import addCircle from '../../assets/CreditCardForm/add-circle.svg';
import { isValid } from 'creditcard.js';
import { getUpcomingYears } from '../../utils/dateUtils';
import { useState } from 'react';
import MailInput from './MailInput';
import CardNumberInput from './CardNumberInput';

function CreditCardForm() {
  // Constants
  const months = [
    { value: '01', option: '01' },
    { value: '02', option: '02' },
    { value: '03', option: '03' },
    { value: '04', option: '04' },
    { value: '05', option: '05' },
    { value: '06', option: '06' },
    { value: '07', option: '07' },
    { value: '08', option: '08' },
    { value: '09', option: '09' },
    { value: '10', option: '10' },
    { value: '11', option: '11' },
    { value: '12', option: '12' }
  ];
  const years = getUpcomingYears();

  // State
  const [form, setForm] = useState({
    cardHolder: '',
    cardNumber: '',
    ccv: '',
    email: '',
    confirmEmail: '',
    month: '',
    year: ''
  });

  // Handlers
  const handleInputChange = (event) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value
    });
  };

  const handleCardHolderChange = (event) => {
    const cardHolder = event.target.value;
    if (/^[a-zA-Z\s]*$/.test(cardHolder)) {
      handleInputChange(event);
    }
  };

  const handleCardNumberChange = (event) => {
    const cardNumber = event.target.value;
    if (/^[\d\s]*$/.test(cardNumber)) {
      handleInputChange(event);
    }
  };

  const handleCcvChange = (event) => {
    const ccv = event.target.value;
    if (/^\d{0,5}$/.test(ccv)) {
      handleInputChange(event);
    }
  };

  const handleEmailChange = (event) => {
    handleInputChange(event);
  };

  const handleConfirmEmailChange = (event) => {
    handleInputChange(event);
  };

  const handleMonthChange = (option) => {
    setForm((prevForm) => ({
      ...prevForm,
      month: option.value
    }));
  };

  const handleYearChange = (option) => {
    setForm((prevForm) => ({
      ...prevForm,
      year: option.value
    }));
  };

  // Validation
  const validateCardHolder = () => {
    const words = form.cardHolder.trim().split(/\s+/);
    return words.length >= 2;
  };

  const validateCardNumber = () => {
    return isValid(form.cardNumber);
  };

  const validateEmails = () => {
    return (
      form.email !== '' &&
      form.email === form.confirmEmail &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    );
  };

  return (
    <div className='w-full font-jakarta'>
      <h1 className='text-[#1A202C] text-[32px] font-semibold text-center mb-4'>
        Datos de Tarjeta
      </h1>
      <div className='flip-container'>
        <img src={creditCard} className='mx-auto -mb-12 flip-image' />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(form);
        }}
        className='bg-[#D3DCE7] rounded-md lg:px-24 md:pb-4 pt-16 pb-2 px-4 shadow text-sm max-w-lg mx-auto w-full'
        autoComplete='off'
      >
        <div className='max-w-[333px] mx-auto'>
          <div className='space-y-3 mb-9'>
            <TextInput
              id='cardHolder'
              placeholder='TITULAR DE LA TARJETA'
              value={form.cardHolder}
              onChange={handleCardHolderChange}
              isValid={validateCardHolder()}
            />
            <CardNumberInput
              id='cardNumber'
              placeholder='NUMERO DE LA TARJETA'
              value={form.cardNumber}
              onChange={handleCardNumberChange}
              isValid={validateCardNumber()}
            />
            <div className='flex w-full'>
              <SelectForm
                options={months}
                placeholder='MES'
                className={'mr-[10px] w-1/3 z-10'}
                onChange={handleMonthChange}
                value={form.month}
              />
              <SelectForm
                options={years}
                placeholder='AÑO'
                className={'mr-4 w-1/3 z-10'}
                onChange={handleYearChange}
                value={form.year}
              />
              <div className='w-1/3'>
                <TextInput
                  id='ccv'
                  placeholder='CCV'
                  value={form.ccv}
                  onChange={handleCcvChange}
                />
              </div>
            </div>
          </div>
          <div className='mb-3'>
            <MailInput
              id='email'
              placeholder='CORREO ELECTRONICO'
              value={form.email}
              onChange={handleEmailChange}
              isValid={validateEmails()}
            />
          </div>
          <MailInput
            id='confirmEmail'
            placeholder='CONFIRMA TU CORREO ELECTRONICO'
            value={form.confirmEmail}
            onChange={handleConfirmEmailChange}
            isValid={validateEmails()}
          />
        </div>
        <button
          type='submit'
          className='text-[#3A556A] ml-auto flex justify-end mt-7 items-center'
        >
          <img src={addCircle} />
          <h3 className='font-semibold text-[15px] ml-1'>Adherir tarjeta</h3>
        </button>
      </form>
    </div>
  );
}

export default CreditCardForm;
