import { Link } from 'react-router-dom';

export const NavigationLinks = () => {
  const links = [
    { label: 'Destinos', url: '#' },
    { label: 'Beneficios', url: '#' },
    { label: 'Quiénes somos', url: '#' },
    { label: 'FAQ', url: '#' },
    { label: 'Contacto', url: '#' }
  ];

  return (
    <div className='flex flex-col md:flex-row gap-4 md:gap-6 items-center  md:w-auto w-40'>
      {links.map((link, index) =>
        link.label === 'Destinos' ? (
          <Link
            key={index}
            to={link.url}
            className='font-semibold underline navbar-text text-base md:text-lg'
          >
            {link.label}
          </Link>
        ) : (
          <Link
            key={index}
            to={link.url}
            className='md:text-[#566e8d] text-white navbar-text text-base md:text-lg'
          >
            {link.label}
          </Link>
        )
      )}
      <Link
        to='/register'
        className='hover:underline navbar-text md:text-[#566e8d] text-white text-base md:text-lg'
      >
        Regístrame
      </Link>
    </div>
  );
};
