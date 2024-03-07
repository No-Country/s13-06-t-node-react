import registerPhoto from '../../assets/Register/registerImage.webp';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import TextInput from '../../components/Register/TextInput';
import MailInput from '../../components/Register/MailInput';
import PasswordInput from '../../components/Register/PasswordInput';
import { useRegister } from '../../hooks/useRegister';
import ErrorAlert from '../../components/Register/ErrorAlert';
import logo from '../../assets/Logo/logo-horizontal.svg';

const Register = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const registerMutation = useRegister(setErrorMessage);

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dni: '',
    password: '',
    confirmPassword: '',
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
    <div className='flex flex-1 h-full'>
      <div className='relative hidden w-0 flex-1 lg:block'>
        <img
          className='absolute inset-0 h-full w-full object-cover'
          src={registerPhoto}
          alt='Logo'
        />
      </div>
      <div className='flex flex-1 flex-col justify-center px-4 py-8 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
        <div className='mx-auto w-full max-w-sm lg:w-96'>
          <div>
            <Link to='/'>
              <img className='h-10 w-auto mx-auto' src={logo} alt='Logo' />
            </Link>
            <h2 className='mt-5 text-2xl font-bold leading-9 tracking-tight text-gray-900 uppercase'>
              REGISTRO DE USUARIO
            </h2>
            <p className='mt-2 text-sm leading-6 text-gray-500'>
              Ya tenes una cuenta?
              <Link
                to='/login'
                className='font-semibold text-[#27C277] hover:text-[#27C277] ml-1'
              >
                Inicia sesion
              </Link>
            </p>
          </div>

          <div className='mt-5'>
            <div>
              {errorMessage && <ErrorAlert errorMessage={errorMessage} />}
              <form
                onSubmit={(e) => handleSubmit(e)}
                method='POST'
                className='space-y-4'
              >
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
                <div className='mt-12'>
                  <label
                    htmlFor='password'
                    className='text-xl font-bold leading-9 tracking-tight text-gray-900 uppercase mb-3'
                  >
                    Contraseña
                  </label>
                </div>
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

                <div>
                  <button
                    type='submit'
                    className='flex w-full justify-center rounded-md bg-[#27C277] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#27C277] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                  >
                    Registrarse
                  </button>
                </div>
              </form>
            </div>

            <div className='mt-10'>
              <div className='relative'>
                <div
                  className='absolute inset-0 flex items-center'
                  aria-hidden='true'
                >
                  <div className='w-full border-t border-gray-300' />
                </div>
                <div className='relative flex justify-center text-sm font-medium leading-6'>
                  <span className='bg-white px-6 text-gray-900 font-semibold'>
                    O continua con
                  </span>
                </div>
              </div>

              <div className='mt-6'>
                <button
                  onClick={() => {}}
                  className='flex w-full items-center justify-center gap-3 rounded-md shadow-md px-3 py-1.5 text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                >
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth='0'
                    version='1.1'
                    x='0px'
                    y='0px'
                    viewBox='0 0 44 44'
                    height='1em'
                    width='1em'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill='#FFC107'
                      d='M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z'
                    ></path>
                    <path
                      fill='#FF3D00'
                      d='M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z'
                    ></path>
                    <path
                      fill='#4CAF50'
                      d='M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z'
                    ></path>
                    <path
                      fill='#1976D2'
                      d='M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z'
                    ></path>
                  </svg>
                  <span className='text-sm font-semibold leading-6'>
                    Google
                  </span>
                </button>
              </div>
            </div>
          </div>
          <Link
            to='/'
            className='text-[#27C277] font-semibold block mt-5 text-center'
          >
            Volver al home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
