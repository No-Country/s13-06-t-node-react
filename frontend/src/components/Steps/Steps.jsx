import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import viajes from '../../assets/Steps/viajes.svg';
import pasajeros from '../../assets/Steps/pasajero.svg';
import resumen from '../../assets/Steps/resumen.svg';
import asientos from '../../assets/Steps/asientos.svg';
import pago from '../../assets/Steps/pago.svg';
import greenArrow from '../../assets/Steps/greenArrow.svg';
import blueArrow from '../../assets/Steps/blueArrow.svg';

export const Steps = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('');

  const determineActiveSection = () => {
    const pathname = location.pathname;
    if (pathname.includes('seats')) {
      setActiveSection('asientos');
    } else if (pathname.includes('passengers')) {
      setActiveSection('pasajeros');
    } else if (pathname.includes('summary')) {
      setActiveSection('resumen');
    } else if (pathname.includes('payment')) {
      setActiveSection('pago');
    } else {
      setActiveSection('viajes');
    }
  };

  useEffect(() => {
    determineActiveSection();
  }, [location]);

  const sections = ['viajes', 'asientos', 'pasajeros', 'resumen', 'pago'];
  const activeIndex = sections.indexOf(activeSection);
  const icons = {
    viajes,
    pasajeros,
    resumen,
    asientos,
    pago
  };

  return (
    <div className='flex items-center justify-between w-full border-2 md:border-[#486284] shadow rounded-r-full rounded-l-3xl'>
      {sections.map((section, index) => (
        <div
          key={index}
          className={`flex items-center justify-around w-full ${
            index < activeIndex
              ? 'bg-[#CEFABE] md:block hidden h-14'
              : index === activeIndex
                ? 'bg-[#CEFABE] h-14 rounded-r-full'
                : index === activeIndex + 1
                  ? ' '
                  : 'hidden'
          } md:flex`}
        >
          <div className='flex gap-4 ml-8'>
            <img src={icons[section]} alt={''} className='w-6 h-6 ' />
            <p className={`${index === activeIndex + 1 ? '' : 'block'}`}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </p>
          </div>

          <>
            <img
              src={greenArrow}
              alt={'greenArrow'}
              className={`h-14 w-14 pr-2  ${index <= activeIndex ? 'block' : 'hidden'}`}
            />
            <img
              src={blueArrow}
              alt={'blueArrow'}
              className={`h-14 w-14 pr-2  ${index <= activeIndex ? 'hidden' : 'block'}`}
            />
          </>
        </div>
      ))}
    </div>
  );
};
