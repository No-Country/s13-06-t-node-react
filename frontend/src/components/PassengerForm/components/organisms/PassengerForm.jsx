import TitleSubtitle from '../molecules/TitleSubtitle';
import SelectForm from '../atoms/SelectForm';
import FormNavigation from '../molecules/FormNavigation';
import ContinueButton from '../atoms/ContinueButton';
import TextInput from '../atoms/TextInput';
import PassengerList from '../atoms/PassengerList';
import { useEffect, useState } from 'react';

function PassengerForm() {
  const [isToggled, setIsToggled] = useState(false);
  const auth = false; // Si inicio sesión

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

  const options = [
    { value: 'dni', option: 'DNI' },
    { value: 'passport', option: 'Pasaporte' }
  ];

  const passengers = [
    { name: 'Mateo', lastname: 'Gonzalez', dni: '12345678' },
    { name: 'Sofia', lastname: 'Rodriguez', dni: '23456789' },
    { name: 'Valentina', lastname: 'Gomez', dni: '34567890' },
    { name: 'Benjamin', lastname: 'Fernandez', dni: '45678901' },
    { name: 'Lucas', lastname: 'Lopez', dni: '56789012' }
  ];

  return (
    <div className='md:bg-[#CED7E4] bg-[#F1F1F1] flex flex-col h-full relative z-30'>
      <TitleSubtitle />
      <div className='w-full'>
        <form
          className='bg-[#D3DCE7] rounded-md lg:px-24 md:pt-12 md:pb-16 pt-4 pb-2 px-4 shadow'
          autoComplete='off'
        >
          <div className='mb-6 relative'>
            <FormNavigation
              passenger={4}
              onClick={handleToggleChange}
              isAuth={auth}
            />
            <PassengerList passengers={passengers} isToggled={isToggled} />
          </div>

          <TextInput id='name' placeholder='NOMBRE' />

          <TextInput id='lastname' placeholder='APELLIDO' />

          <div className='mb-4'>
            <SelectForm options={options} />
          </div>

          <TextInput id='dni' placeholder='N° DE DOCUMENTO' />
        </form>
      </div>
      <div className='hidden md:block flex-1 bg-[#CED7E4]'>
        <div className='h-full flex items-center justify-center'>
          <ContinueButton
            label='Continuar'
            to='/ticket/summary'
            disabled={false}
          />
        </div>
      </div>
    </div>
  );
}

export default PassengerForm;