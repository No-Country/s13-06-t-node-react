import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className='bg-[#D3DCE7] cursor-default mt-8 md:mt-0 md:pt-10 text-black'>
      <div className='flex flex-col md:flex-row justify-between md:pb-8 pb-4 md:px-14'>
        <div className='border-b-2 md:hidden border-gray-200 pt-4 bg-white' />
        <div className='w-full md:w-1/4 flex md:flex-col md:items-start items-center justify-around md:bg-[#D3DCE7] bg-white py-8'>
          <p className='font-semibold text-3xl md:pb-4'>Logo</p>
          <p className='text-sm md:inline hidden'>
            Eslogan ...Deja que tu viaje comience con nosotros
          </p>
          <div className='flex flex-row items-center md:mt-0 gap-6 '>
            <div className='flex md:mt-5 md:pt-6 text-white gap-4'>
              <div className='group bg-white rounded-full p-2 cursor-pointer hover:bg-gray-100 active:bg-gray-200 shadow-md transition'>
                <a
                  className='text-black text-xl group-hover:text-gray-600 transition'
                  href=''
                  target='_blank'
                >
                  <FaFacebookSquare />
                </a>
              </div>
              <div className='group bg-white rounded-full p-2 cursor-pointer hover:bg-gray-100 active:bg-gray-200 shadow-md transition'>
                <a
                  className='text-black text-xl group-hover:text-gray-600 transition'
                  href=''
                  target='_blank'
                >
                  <FaXTwitter />
                </a>
              </div>
              <div className='group bg-white rounded-full p-2 cursor-pointer hover:bg-gray-100 active:bg-gray-200 shadow-md transition'>
                <a
                  className='text-black text-xl group-hover:text-gray-600 transition'
                  href=''
                  target='_blank'
                >
                  <FaInstagramSquare />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='px-8 '>
          <h1 className='font-semibold text-xl md:pb-4 pt-5 md:pt-0 underline md:no-underline'>
            Nosotros
          </h1>
          <nav className='md:flex hidden flex-col gap-2'>
            <a
              className='hover:text-teal-500 transition-all cursor-pointer'
              href='/'
            >
              Quienes somos
            </a>
            <a
              className='hover:text-teal-500 transition-all cursor-pointer'
              href='/'
            >
              Centro de Atencios
            </a>
            <a
              className='hover:text-teal-500 transition-all cursor-pointer'
              href='/'
            >
              Terminales
            </a>
            <a
              className='hover:text-teal-500 transition-all cursor-pointer'
              href='/'
            >
              Nuestra Flota
            </a>
          </nav>
        </div>
        <div className='px-8'>
          <h1 className='font-semibold text-xl md:pb-4 pt-5 md:pt-0 underline md:no-underline'>
            Viajes
          </h1>
          <nav className='md:flex hidden flex-col gap-2'>
            <a
              className='hover:text-teal-500 transition-all cursor-pointer'
              href='/'
            >
              Destinos
            </a>
            <a
              className='hover:text-teal-500 transition-all cursor-pointer'
              href='/'
            >
              Promociones
            </a>
            <a
              className='hover:text-teal-500 transition-all cursor-pointer'
              href='/'
            >
              Unirte al Club
            </a>
            <a
              className='hover:text-teal-500 transition-all cursor-pointer'
              href='/'
            >
              ------
            </a>
          </nav>
        </div>
        <div className='px-8'>
          <h1 className='font-semibold text-xl md:pb-4 pt-5 md:pt-0 underline md:no-underline'>
            Ayuda
          </h1>
          <nav className='md:flex hidden flex-col gap-2'>
            <a
              className='hover:text-teal-500 transition-all cursor-pointer'
              href='/'
            >
              Documentacion para tu viaje
            </a>
            <a
              className='hover:text-teal-500 transition-all cursor-pointer'
              href='/'
            >
              Cambios y devoluciones
            </a>
            <a
              className='hover:text-teal-500 transition-all cursor-pointer'
              href='/'
            >
              Como Comprar?
            </a>
            <a
              className='hover:text-teal-500 transition-all cursor-pointer'
              href='/'
            >
              Politicas de equipaje
            </a>
          </nav>
          <div className='border-b-2 border-slate-500 mt-6 md:hidden'></div>
        </div>
      </div>
      <div className='flex gap-2 md:gap-0 justify-end items-end md:items-center md:justify-between md:py-4 md:px-14 px-3 flex-col-reverse md:flex-row px-8 pb-6'>
        <span className='text-sm font-semibold'>
          @2024 Todos los derechos reservados
        </span>
        <div className='flex flex-col md:flex-row items-center justify-end md:gap-4 gap-2'>
          <span className='text-sm font-semibold hover:text-teal-500 transition-all cursor-pointer'>
            Politicas de privacidad
          </span>
          <span className='text-sm font-semibold hover:text-teal-500 transition-all cursor-pointer'>
            Terminos y condiciones
          </span>
        </div>
      </div>
      <div className='h-20 md:hidden bg-[#486284] flex items-end justify-center'>
        <div className='h-1 mb-3 w-3/12 bg-white rounded'></div>
      </div>
    </div>
  );
};

export default Footer;
