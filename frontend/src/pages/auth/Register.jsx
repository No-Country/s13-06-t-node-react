import { useState } from 'react';
import registerImage from '../../assets/Register/registerImage.webp';

import TextInput from '../../components/Register/TextInput.jsx';
import PasswordInput from '../../components/Register/PasswordInput.jsx';
import MailInput from '../../components/Register/MailInput.jsx';
import NumberInput from '../../components/Register/NumberInput.jsx';
import { useRegister } from '../../hooks/useRegister.js';
import googleIcon from '../../assets/Register/google-icon.svg';

function Register() {
  const registerMutation = useRegister();

  const [form, setForm] = useState({
    firstName: 'Pepe',
    lastName: 'Pepe',
    email: 'pepe@pepe.com',
    documentType: '',
    dni: '12345678',
    password: 'Test123',
    confirmPassword: 'Test123',
    acceptTerms: false
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    registerMutation.mutate(form);
    console.log(form);
  }

  return (
    <main className='h-screen bg-[#A5CCE0] pt-28'>
      <div className='flex justify-center max-w-7xl mx-auto'>
        <div className='w-full mt-24 hidden lg:block'>
          <img src={registerImage} alt='log' className='max-h-[664px]' />
        </div>
        <div className='max-w-[484px] w-full px-11'>
          <h1 className='uppercase text-2xl lg:text-[32px] text-[#1A202C] font-bold text-center lg:text-left'>
            Registro de Usuario
          </h1>
          <h3 className='lg:text-2xl text-center lg:text-left text-lg text-[#1A202C] font-medium opacity-45 mb-8 lg:mb-3 mt-3 lg:mt-0'>
            Datos personales
          </h3>
          <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col'>
            <TextInput
              id='firstName'
              placeholder='NOMBRE'
              name='firstName'
              value={form.firstName}
              onChange={(e) => handleChange(e)}
              pattern='^[A-Za-z]{3,25}$'
              title='Incluye al menos 3 caracteres y no más de 25. Sólo letras.'
              required
            />
            <TextInput
              id='lastName'
              placeholder='APELLIDO'
              name='lastName'
              value={form.lastName}
              onChange={(e) => handleChange(e)}
              pattern='^[A-Za-z]{3,25}$'
              title='Incluye al menos 3 caracteres y no más de 25. Sólo letras.'
              required
            />
            <MailInput
              id='email'
              placeholder='CORREO ELECTRONICO'
              name='email'
              value={form.email}
              onChange={(e) => handleChange(e)}
              required
            />
            <NumberInput
              id='dni'
              placeholder='N° DE DOCUMENTO'
              name='dni'
              value={form.dni}
              onChange={(e) => handleChange(e)}
              pattern='^\d{6,12}$'
              title='Incluya al menos 6 números y no más de 12.'
              required
            />
            <label
              htmlFor='password'
              className='font-medium text-2xl tracking-tight text-[#1A202C] opacity-45 mb-3'
            >
              Contraseña
            </label>
            <PasswordInput
              id='password'
              placeholder='CONTRASEÑA'
              name='password'
              value={form.password}
              onChange={(e) => handleChange(e)}
              pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$'
              title='Incluye al menos 6 caracteres, 1 mayúscula, 1 minúscula y 1 número.'
            />
            <PasswordInput
              id='confirmPassword'
              placeholder='REPITE TU CONTRASEÑA'
              name='confirmPassword'
              value={form.confirmPassword}
              onChange={(e) => handleChange(e)}
              pattern={form.password}
              title='Debe coincidir con la contraseña.'
            />
            <div className='flex mt-1 mb-5'>
              <input type='checkbox' className='mr-2' />
              <p className='text-[#1A202C] mr-1'>Aceptar</p>
              <p className='text-[#007AFF]'>Terminos y condiciones</p>
            </div>
            <div className='flex flex-wrap justify-between'>
              <button
                type='button'
                disabled={registerMutation.isLoading}
                className='flex justify-center bg-white w-full max-w-[170px] lg:max-w-[190px] rounded items-center lg:w-1/2'
              >
                <span className='py-3 text-black opacity-45 mr-2 text-base lg:text-lg font-medium tracking-tight'>
                  Continuar con
                </span>
                <img src={googleIcon} />
              </button>
              <button
                type='submit'
                disabled={registerMutation.isLoading}
                className='bg-[#27C277] w-full max-w-[164px] lg:max-w-[190px] lg:w-1/2 rounded text-white font-semibold'
              >
                Registrarme
              </button>
            </div>
            {registerMutation.isError && (
              <div>Error: {registerMutation.error.message}</div>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}

export default Register;
