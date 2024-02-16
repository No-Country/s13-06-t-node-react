import { useState } from 'react';

export default function SuscribeEmail() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes hacer lo que necesites con el correo electrónico, como enviarlo a un servidor
    console.log('Correo electrónico:', email);
    // También puedes limpiar el campo de entrada después de enviar el formulario
    setEmail('');
  };

  return (
    <>
      <h2 className='font-bold text-2xl text-center pb-3'>
        ¡Recibí las mejores ofertas en tu email!
      </h2>
      <form
        onSubmit={handleSubmit}
        className='bg-[#F6F6F6] p-5 gap-3 flex-col justify-center flex md:flex-row'
      >
        <div className='relative'>
          <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
            <svg
              className='h-5 w-5 text-gray-400'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              aria-hidden='true'
            >
              <path
                fillRule='evenodd'
                d='M17.02 4H2.98A1.98 1.98 0 0 0 1 5.98v8.04C1 15.1 1.9 16 2.98 16h14.04A1.98 1.98 0 0 0 19 14.02V5.98C19 5.42 18.55 5 18 5a1 1 0 0 0-.98 1zM18 9.5l-6 3-6-3V6h12v3.5z'
              />
            </svg>
          </div>
          <input
            type='email'
            name='email'
            id='email'
            value={email}
            onChange={handleEmailChange}
            className='block w-full md:w-96 pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            placeholder='Ingresa tu dirección de email'
          />
        </div>
        <button
          type='submit'
          className='bg-green-400 rounded-md text-white  md:px-7 py-1 mt-1'
        >
          Suscribirme
        </button>
      </form>
    </>
  );
}
