import { useState } from 'react';
import CardProfits from './CardProfits.jsx';
import img1 from '../../assets/Profits/Bariloche.png';
import img2 from '../../assets/Profits/MarPlata.png';
import img3 from '../../assets/Profits/Merlo.png';
import img4 from '../../assets/Profits/VillaCarlos.png';

export default function Profits() {
  const [selectedTab, setSelectedTab] = useState('yes'); // Estado para almacenar la pestaña seleccionada

  return (
    <div className='flex flex-col justify-center items-center p-2'>
      <h2 className='text-5xl pb-5 text-center text-midnight-slate font-medium'>
        Nuestros destinos
      </h2>
      <p className='pb-5 pl-2 text-lg  text-color-dark max-w-lg text-center'>
        Conoce lugares, especies, eventos, comida y personajes de nuestro
        hermoso país.
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
            <div className='hidden md:flex flex-wrap gap-5 items-center justify-center'>
              <CardProfits name={'Bariloche'} image={img1} price={'$100.00'} />
              <CardProfits
                name={'Mar de plata'}
                image={img2}
                price={'$15.00'}
              />
              <CardProfits name={'Merlo'} image={img3} price={'$10.00'} />
              <CardProfits
                name={'Villa Carlos Paz'}
                image={img4}
                price={'$20.00'}
              />
            </div>
            <div className='daisy-carousel daisy-carousel-center  max-w-md p-4 space-x-4  rounded-box md:hidden'>
              <div className='daisy-carousel-item'>
                <CardProfits name={'Bariloche'} image={img1} price={'$30.00'} />
              </div>
              <div className='daisy-carousel-item'>
                <CardProfits
                  name={'Mar de plata'}
                  image={img2}
                  price={'$35.00'}
                />
              </div>
              <div className='daisy-carousel-item'>
                <CardProfits name={'Merlo'} image={img3} price={'$70.00'} />
              </div>
              <div className='daisy-carousel-item'>
                <CardProfits
                  name={'Villa Carlos Paz'}
                  image={img4}
                  price={'$100.00'}
                />
              </div>
            </div>
          </>
        )}
        {selectedTab === 'no' && (
          <>
            <div className='hidden md:flex flex-wrap gap-5 items-center justify-center'>
              <CardProfits name={'Bariloche'} image={img1} price={'$10.00'} />
              <CardProfits
                name={'Mar de plata'}
                image={img2}
                price={'$24.00'}
              />
              <CardProfits name={'Merlo'} image={img3} price={'$30.00'} />
              <CardProfits
                name={'Villa Carlos Paz'}
                image={img4}
                price={'$20.00'}
              />
            </div>
            <div className='daisy-carousel daisy-carousel-center  max-w-md p-4 space-x-4  rounded-box md:hidden'>
              <div className='daisy-carousel-item'>
                <CardProfits name={'Bariloche'} image={img1} price={'$20.00'} />
              </div>
              <div className='daisy-carousel-item'>
                <CardProfits
                  name={'Mar de plata'}
                  image={img2}
                  price={'$35.00'}
                />
              </div>
              <div className='daisy-carousel-item'>
                <CardProfits name={'Merlo'} image={img3} price={'$35.00'} />
              </div>
              <div className='daisy-carousel-item'>
                <CardProfits
                  name={'Villa Carlos Paz'}
                  image={img4}
                  price={'$100.00'}
                />
              </div>
            </div>
          </>
        )}
      </div>
      <button className='bg-green-400 p-3 rounded-lg text-white w-60 mt-5'>
        Ver mas
      </button>
    </div>
  );
}
