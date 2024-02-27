import TitleForm from '../PassengerForm/components/atoms/TitleForm';
import TextInput from '../PassengerForm/components/atoms/TextInput';
import SelectForm from '../PassengerForm/components/atoms/SelectForm';
import { useState } from 'react';

export default function DataForm() {
  const options = [
    { value: 'dni', option: 'DNI' },
    { value: 'passport', option: 'Pasaporte' }
  ];

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <TitleForm title='Datos Comprador' />

      <div>
        <form
          className=' bg-[#D3DCE7] rounded-md lg:px-24 md:pt-12 md:pb-7 pt-4 pb-2 px-4 shadow'
          autoComplete='off'
        >
          <TextInput id='name' placeholder='NOMBRE' />

          <TextInput id='lastname' placeholder='APELLIDO' />

          <div className='mb-4'>
            <SelectForm options={options} />
          </div>
          <TextInput id='document' placeholder='Nº DE DOCUMENTO' />

          <TextInput id='email' placeholder='CORREO ELECTRONICO' />

          <TextInput
            id='confirmemail'
            placeholder='CONFIRMA TU CORREO ELECTRONICO'
          />
          <div className='pt-3'>
            <a href='' className='text-[#007AFF]'>
              ¿TIENES UN DESCUENTO?
            </a>
          </div>
        </form>

        <div className='flex items-center px-3 mt-6 md:px-24 md:mt-9'>
          <input
            type='checkbox'
            id='termsAndConditions'
            className='form-checkbox h-5 w-5 text-[#007AFF]'
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label
            htmlFor='termsAndConditions'
            className='ml-2 block text-gray-900'
          >
            Aceptar{' '}
            <a href='' className='text-[#007AFF]'>
              Términos y condiciones
            </a>
          </label>
        </div>
      </div>
    </div>
  );
}
