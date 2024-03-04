import { useState } from 'react';
import road_image from '../../assets/LoginForm/road_image.jpg';
import google_logo from '../../assets/LoginForm/google_logo.svg';
import user_logo from '../../assets/LoginForm/user_logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/auth';
import Toast from '../Seats/Toast';

const LoginForm = () => {
  const [showToast, setShowToast] = useState(false);
  const [type, setType] = useState('');
  const [toastMessage, setToastMessage] = useState('');
  const [mailInput, setMailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [wrongMailFormat, setWrongMailFormat] = useState(false);
  const [wrongPasswordFormat, setWrongPasswordFormat] = useState(false);

  const navigate = useNavigate();

  const handleChange = (event, inputType) => {
    const inputValue = event.target.value;

    if (inputType === 'email') {
      setMailInput(inputValue);

      if (!isValidEmail(inputValue) && inputValue !== '') {
        setWrongMailFormat(true);
      } else {
        setWrongMailFormat(false);
      }
    }

    if (inputType === 'password') {
      setPasswordInput(inputValue);

      if (!isValidPassword(inputValue) && inputValue !== '') {
        setWrongPasswordFormat(true);
      } else {
        setWrongPasswordFormat(false);
      }
    }
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPassword = (password) => {
    return password.length >= 6;
  };

  const handleLogin = async () => {
    try {
      const credentials = {
        email: mailInput,
        password: passwordInput
      };

      const userData = await loginUser(credentials);

      const { user, token } = userData.body;

      console.log('Información del usuario:', user); // HAY QUE ENVIAR ESTO A UN CONTEXT PARA TENER LA INFO

      setShowToast(true);
      setType('success');
      setToastMessage('Usuario logeado. Volveras al inicio.');

      setTimeout(() => {
        navigate('/');
      }, 2000);

      localStorage.setItem('token', token);
    } catch (error) {
      setShowToast(true);
      setType('error');
      setToastMessage(error.message);
    }
  };

  return (
    <div className='md:bg-[#A5CCE0] bg-[#D8ECF6] min-h-screen w-screen'>
      <div className='flex md:flex-row flex-col items-center md:items-start md:justify-between justify-center md:px-4 py-4'>
        <div className='md:hidden mt-10 mb-4'>
          <img src={user_logo} alt='user_logo' />
        </div>
        <span className='md:block hidden py-4 px-10 text-[#1A202C] font-bold text-4xl '>
          LOGO
        </span>
        <div className='flex gap-2'>
          <span className='text-[#1A202C] opacity-45 h-max'>
            ¿Nuevo Usuario?
          </span>
          <Link to='/register'>
            <span className='text-green-600 opacity-45 cursor-pointer hover:opacity-100 h-max'>
              REGISTRATE
            </span>
          </Link>
        </div>
      </div>

      <div className='md:mx-20 md:my-10 flex justify-center gap-4 text-[#1A202C] '>
        <div className='opacity-85 md:block hidden overflow-hidden'>
          <img
            src={road_image}
            alt='road_image'
            className='max-h-[546px] h-full w-full object-cover'
          />
        </div>
        <div className='flex flex-col w-full lg:w-7/12 w-full md:p-4 md:justify-around md:text-start text-center  md:items-stretch'>
          <div className='flex flex-col gap-6'>
            <div className='md:text-3xl text-xl font-bold'>
              ¡TE DAMOS LA BIENVENIDA!
            </div>
            <div className='md:text-2xl text-lg opacity-45'>
              Ingresa tus datos para continuar
            </div>
          </div>
          <div className='w-full md:p-0 p-6'>
            <div className='h-10 flex items-center md:justify-start justify-center'>
              {wrongMailFormat && mailInput !== '' && (
                <span className='text-red-500 md:text-base text-xs'>
                  No es un mail válido (ejemplo@ejemplo.com)
                </span>
              )}
            </div>
            <input
              type='text'
              onChange={(event) => handleChange(event, 'email')}
              className={`shadow appearance-none rounded w-full border-2 py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                wrongMailFormat ? 'border-red-400' : ''
              } w-full font-light md:text-base text-xs`}
              placeholder='CORREO ELECTRONICO'
            />
            <div className='h-10 flex items-center md:justify-start justify-center'>
              {wrongPasswordFormat && passwordInput !== '' && (
                <span className='text-red-500 md:text-base text-xs'>
                  Contraseña inválida. Mín. 6 caracteres.
                </span>
              )}
            </div>
            <input
              type='password'
              onChange={(event) => handleChange(event, 'password')}
              className={`shadow appearance-none rounded w-full border-2 py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                wrongPasswordFormat ? 'border-red-400' : ''
              } w-full font-light md:text-base text-xs`}
              placeholder='CONTRASEÑA'
            />
            <div className='md:pt-6 flex'>
              <span className='text-[#007AFF] opacity-45 lg:text-xl text-base underline cursor-pointer hover:opacity-70 md:p-0 p-2'>
                Perdí mi contraseña
              </span>
            </div>
          </div>
          <div className='flex md:justify-between justify-evenly'>
            <button
              className='bg-[#27C277] md:uppercase text-white md:font-semibold md:text-base rounded text-sm lg:px-6 lg:py-2 w-[45%] hover:opacity-80'
              onClick={handleLogin}
            >
              Ingresar
            </button>
            <button className='flex items-center justify-center gap-2 bg-white px-1 py-2 rounded w-[45%] hover:opacity-80'>
              <span className='opacity-45 md:font-medium md:text-base lg:text-xl text-sm'>
                Continuar con
              </span>
              <img
                src={google_logo}
                alt='google_logo'
                className='md:w-auto w-1/6'
              />
            </button>
          </div>
        </div>
      </div>
      <Toast showToast={showToast} setShowToast={setShowToast} type={type}>
        <span>{toastMessage}</span>
      </Toast>
    </div>
  );
};

export default LoginForm;
