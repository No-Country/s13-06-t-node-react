import TitleSubtitle from '../molecules/TitleSubtitle';
import SelectForm from '../atoms/SelectForm';
import FormNavigation from '../molecules/FormNavigation';
import TextInput from '../atoms/TextInput';
import PassengerList from '../atoms/PassengerList';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function PassengerForm({ auth }) {
  const seatQuantity = useSelector((state) => state.seat.seatQuantity);
  const [isToggled, setIsToggled] = useState(false);

  // Controla la Lista de Pasajeros si Inicio Sesión
  const handleToggleChange = (value) => {
    setIsToggled(value);
  };

  useEffect(() => {
    // Verificar si auth cambió a false y cerrar la lista  de pasajeros si es así
    if (!auth) {
      setIsToggled(false);
    }
  }, [auth]);

  const options = [{ value: 'dni', option: 'DNI' }];

  const passengers = [
    { name: 'Mateo', lastname: 'Gonzalez', dni: '12345678' },
    { name: 'Sofia', lastname: 'Rodriguez', dni: '23456789' },
    { name: 'Valentina', lastname: 'Gomez', dni: '34567890' },
    { name: 'Benjamin', lastname: 'Fernandez', dni: '45678901' }
  ];

  const filteredPassengers = passengers.slice(0, seatQuantity);

  return (
    <div className='sm:bg-[#CED7E4] bg-[#F1F1F1] flex flex-col h-full relative'>
      <TitleSubtitle />
      <div className='w-full'>
        <form
          className='bg-[#D3DCE7] rounded-md lg:px-24 lg:pt-[3.3rem] lg:pb-14 md:pt-11 md:pb-14 sm:px-6 sm:pt-6 sm:pb-7 pt-4 pb-5 px-4 shadow'
          autoComplete='off'
        >
          <div className='mb-6 relative'>
            <FormNavigation
              passenger={seatQuantity}
              onClick={handleToggleChange}
              isAuth={auth}
            />
            <PassengerList
              passengers={filteredPassengers}
              isToggled={isToggled}
            />
          </div>

          <TextInput id='name' placeholder='NOMBRE' />

          <TextInput id='lastname' placeholder='APELLIDO' />

          <div className='mb-4'>
            <SelectForm options={options} />
          </div>

          <TextInput id='dni' placeholder='N° DE DOCUMENTO' />
        </form>
      </div>
    </div>
  );
}

PassengerForm.propTypes = {
  auth: PropTypes.bool.isRequired
};

export default PassengerForm;
