import { useState } from 'react';
import CardProfits from './CardProfits.jsx';

export default function Profits() {
  const [selectedTab, setSelectedTab] = useState('yes'); // Estado para almacenar la pestaña seleccionada

  return (
    <div className='flex flex-col justify-center items-center p-2'>
      <h2 className='text-5xl pb-5 text-center'>Nuestros Destinos</h2>
      <p className='pb-5 pl-2'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et
      </p>

      <div className='flex items-center justify-center'>
        <ul className='mx-auto flex max-w-full w-full items-center gap-x-0 md:gap-x-10 '>
          <li>
            <input
              className='peer sr-only'
              type='radio'
              value='yes'
              name='answer'
              id='yes'
              checked={selectedTab === 'yes'}
              onChange={() => setSelectedTab('yes')}
            />
            <label
              className={`flex justify-center cursor-pointer  bg-white py-2 px-4  focus:outline-none ${
                selectedTab === 'yes' ? 'border-b-2 border-black' : ''
              } transition-all duration-200 ease-in-out`}
              htmlFor='yes'
            >
              Popular
            </label>
          </li>

          <li>
            <input
              className='peer sr-only'
              type='radio'
              value='no'
              name='answer'
              id='no'
              checked={selectedTab === 'no'} // Establece la pestaña como seleccionada si es 'no'
              onChange={() => setSelectedTab('no')} // Cambia el estado cuando se selecciona esta pestaña
            />
            <label
              className={`flex justify-center cursor-pointer  bg-white py-2 px-4  focus:outline-none ${
                selectedTab === 'no' ? 'border-b-2 border-black' : ''
              } transition-all duration-200 ease-in-out`}
              htmlFor='no'
            >
              Promociones
            </label>
          </li>
        </ul>
      </div>

      {/* Contenido de las pestañas */}
      <div className='flex flex-wrap gap-5 items-center justify-center mt-5 '>
        {selectedTab === 'yes' && (
          <>
            <CardProfits />
            <CardProfits />
            <CardProfits />
            <CardProfits />
            <CardProfits />
            <CardProfits />
          </>
        )}
        {selectedTab === 'no' && (
          <>
            <CardProfits />
            <CardProfits />
            <CardProfits />
            <CardProfits />
            <CardProfits />
            <CardProfits />
          </>
        )}
        {selectedTab === 'yesno' && (
          <>
            <CardProfits />
            <CardProfits />
            <CardProfits />
            <CardProfits />
            <CardProfits />
            <CardProfits />
          </>
        )}
        {selectedTab === 'noyes' && (
          <>
            <CardProfits />
            <CardProfits />
            <CardProfits />
            <CardProfits />
            <CardProfits />
            <CardProfits />
          </>
        )}
      </div>
      <button className='bg-green-400 p-3 rounded-lg text-white w-60 mt-5'>
        Ver mas
      </button>
    </div>
  );
}
