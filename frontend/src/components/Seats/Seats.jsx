import { useEffect, useState } from 'react';
import driver from '../../assets/Seats/driver.svg';
import PropTypes from 'prop-types';

const Seats = (props) => {
  const [sectionA, setSectionA] = useState([]);
  const [sectionB, setSectionB] = useState([]);
  const [sectionC, setSectionC] = useState([]);
  const [sectionD, setSectionD] = useState([]);
  const [sectionE, setSectionE] = useState([]);
  const [floor, setFloor] = useState('first');
  const [showToast, setShowToast] = useState(false);
  const { tickets = 1 } = props;

  const initializeSection = (setSection, seatAmount) => {
    const newArray = Array.from({ length: seatAmount }, (_, index) => ({
      id: index + 1,
      status: 'free'
      //   status: Math.random() < 0.7 ? 'free' : 'occupied' // ESTO ES PARA TESTEAR FUNCIONALIDAD. DESPUES VENDRA DESDE EL BACK
    }));

    setSection(newArray);
  };

  useEffect(() => {
    initializeSection(setSectionA, 16);
    initializeSection(setSectionB, 4);
    initializeSection(setSectionC, 8);
    initializeSection(setSectionD, 8);
    initializeSection(setSectionE, 4);
  }, []);

  const toggleFloor = (floor) => {
    setFloor(floor === 1 ? 'first' : 'second');
  };

  const toggleSeat = (id, section, setSection) => {
    const currentSeat = section.find((seat) => seat.id === id);

    if (currentSeat.status === 'occupied') {
      return;
    }

    const selectedSeats = [
      ...sectionA,
      ...sectionB,
      ...sectionC,
      ...sectionD,
      ...sectionE
    ].filter((seat) => seat.status === 'selected').length;

    if (selectedSeats >= tickets && currentSeat.status !== 'selected') {
      if (showToast) {
        return;
      }
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
      return;
    }

    setSection((prevState) => {
      return prevState.map((seat) => {
        if (seat.id === id) {
          return {
            ...seat,
            status: seat.status === 'free' ? 'selected' : 'free'
          };
        }
        return seat;
      });
    });
  };

  return (
    <div className='flex flex-col items-center w-full max-w-[350px] justify-start m-2'>
      <p className='text-3xl font-semibold'>Elige tu asiento</p>
      <div className='flex justify-center gap-8 w-full m-4'>
        <button
          className={`btn ${floor === 'first' ? 'btn-accent' : ''}`}
          onClick={() => toggleFloor(1)}
        >
          Nivel 1
        </button>
        <button
          className={`btn ${floor === 'second' ? 'btn-accent' : ''}`}
          onClick={() => toggleFloor(2)}
        >
          Nivel 2
        </button>
      </div>
      <p className='mb-4 font-medium text-gray-400 text-sm'>
        {floor === 'first' ? 'Primer' : 'Segundo'} piso
      </p>

      {floor === 'first' && (
        <div className='w-full flex justify-center items-center flex-col'>
          <div className='w-5/6 flex justify-start mb-6 px-4'>
            <img src={driver} alt='driver_logo' />
          </div>
          <div className='flex w-5/6 items-center justify-between'>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 w-full justify-items-center'>
              {sectionD.map((seat) => (
                <div
                  key={seat.id}
                  className={`w-12 h-12 rounded-lg transition ${
                    seat.status === 'occupied'
                      ? 'bg-gray-200 cursor-default'
                      : seat.status === 'free'
                        ? 'bg-yellow-400 hover:bg-yellow-300 active:bg-yellow-200 cursor-pointer'
                        : 'bg-green-300 hover:bg-green-200 active:bg-green-100 cursor-pointer'
                  }`}
                  onClick={() => toggleSeat(seat.id, sectionD, setSectionD)}
                />
              ))}
            </div>
            <div className='grid grid-cols-1 grid-rows-4 gap-4 w-full justify-items-end'>
              {sectionE.map((seat) => (
                <div
                  key={seat.id}
                  className={`w-12 h-12 rounded-lg transition ${
                    seat.status === 'occupied'
                      ? 'bg-gray-200 cursor-default'
                      : seat.status === 'free'
                        ? 'bg-yellow-400 hover:bg-yellow-300 active:bg-yellow-200 cursor-pointer'
                        : 'bg-green-300 hover:bg-green-200 active:bg-green-100 cursor-pointer'
                  }`}
                  onClick={() => toggleSeat(seat.id, sectionE, setSectionE)}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {floor === 'second' && (
        <div className='w-full flex justify-center gap-12'>
          <div className='grid grid-cols-2 grid-rows-8 gap-4 w-3/6 justify-items-center'>
            {sectionA.map((seat) => (
              <div
                key={seat.id}
                className={`w-12 h-12 rounded-lg transition ${
                  seat.status === 'occupied'
                    ? 'bg-gray-200 cursor-default'
                    : seat.status === 'free'
                      ? 'bg-yellow-400 hover:bg-yellow-300 active:bg-yellow-200 cursor-pointer'
                      : 'bg-green-300 hover:bg-green-200 active:bg-green-100 cursor-pointer'
                }`}
                onClick={() => toggleSeat(seat.id, sectionA, setSectionA)}
              />
            ))}
          </div>
          <div className='flex flex-col w-3/6 items-center justify-between'>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 w-full justify-items-center'>
              {sectionB.map((seat) => (
                <div
                  key={seat.id}
                  className={`w-12 h-12 rounded-lg transition ${
                    seat.status === 'occupied'
                      ? 'bg-gray-200 cursor-default'
                      : seat.status === 'free'
                        ? 'bg-yellow-400 hover:bg-yellow-300 active:bg-yellow-200 cursor-pointer'
                        : 'bg-green-300 hover:bg-green-200 active:bg-green-100 cursor-pointer'
                  }`}
                  onClick={() => toggleSeat(seat.id, sectionB, setSectionB)}
                />
              ))}
            </div>
            <div className='grid grid-cols-2 grid-rows-4 gap-4 w-full justify-items-center'>
              {sectionC.map((seat) => (
                <div
                  key={seat.id}
                  className={`w-12 h-12 rounded-lg transition ${
                    seat.status === 'occupied'
                      ? 'bg-gray-200 cursor-default'
                      : seat.status === 'free'
                        ? 'bg-yellow-400 hover:bg-yellow-300 active:bg-yellow-200 cursor-pointer'
                        : 'bg-green-300 hover:bg-green-200 active:bg-green-100 cursor-pointer'
                  }`}
                  onClick={() => toggleSeat(seat.id, sectionC, setSectionC)}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {showToast && (
        <div className='toast'>
          <div className='alert alert-warning flex'>
            <span>Ya seleccionaste tus {tickets} asientos.</span>
          </div>
        </div>
      )}
    </div>
  );
};

Seats.propTypes = {
  tickets: PropTypes.number.isRequired
};

export default Seats;
