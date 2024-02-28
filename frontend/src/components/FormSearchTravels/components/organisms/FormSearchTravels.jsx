import { useEffect, useState } from 'react';
import DateInput from '../atoms/DateInput';
import NumberInput from '../molecules/NumberInput/NumberInput';
import SearchButton from '../atoms/SearchButton';
import Autocomplete from '../organisms/Autocomplete';
import { getCurrentDate } from '../../../../utils/dateUtils';
import { useDispatch } from 'react-redux';

const FormSearchTravels = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    origin: '',
    destination: '',
    departure_date: getCurrentDate(),
    return_date: getCurrentDate(),
    passengers: 1
  });

  // Estado adicional para la fecha de vuelta
  const [returnDate, setReturnDate] = useState(formData.return_date);

  // Validación del Formulario
  const [formValid, setFormValid] = useState(false);

  const handleOriginChange = (e) => {
    const value = e.target.value;
    setOrigin(value);
    validateInputs(value, destination);
    setFormData({ ...formData, origin: value });
  };

  const handleDestinationChange = (e) => {
    const value = e.target.value;
    setDestination(value);
    validateInputs(origin, value);
    setFormData({ ...formData, destination: value });
  };

  const validateInputs = (origin, destination) => {
    const isValidOrigin = cityOptions.includes(origin);
    const isValidDestination = cityOptions.includes(destination);
    const areDifferentCities = origin !== destination;

    if (isValidOrigin && isValidDestination && areDifferentCities) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;

    // Actualizar el estado del formulario
    setFormData({
      ...formData,
      [id]: value
    });

    // Actualizar el estado de la fecha de retorno si es necesario
    if (id === 'return_date') {
      setReturnDate(value);
    }
  };

  useEffect(() => {
    if (formData.departure_date) {
      setReturnDate(formData.departure_date);
    }
  }, [formData.departure_date]);

  const handlePassengersChange = (newQuantity) => {
    setFormData({
      ...formData,
      passengers: newQuantity
    });
  };

  const handleSearch = () => {
    console.log('Form data:', formData);
    setFormData({
      origin: '',
      destination: '',
      departure_date: getCurrentDate(),
      return_date: getCurrentDate(),
      passengers: 1
    });
    setReturnDate(getCurrentDate());
    setFormValid(false);
    dispatch({ type: 'SET_SEAT_QUANTITY', payload: formData.passengers });
  };

  const cityOptions = [
    'Buenos Aires',
    'Córdoba',
    'Mendoza',
    'Bariloche',
    'Salta'
  ];

  return (
    <div className='flex items-center justify-center px-6 md:px-0 lg:-mt-28 sm:-mt-10 -mt-8 py-6 '>
      <form className='bg-gray-200 rounded px-6 py-6 lg:flex md:w-auto w-full shadow-2xl shadow-slate-500/40'>
        <div className='grid lg:grid-cols-5 grid-cols-2 lg:divide-x-2 divide-gray-400 gap-4'>
          <div className='mb-4 lg:ps-4 col-span-2 lg:col-span-1'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2 uppercase'
              htmlFor='origin'
            >
              Origen
            </label>
            <Autocomplete
              id='origin'
              value={origin}
              onChange={handleOriginChange}
              options={cityOptions}
              placeholder='Ciudad de Origen'
            />
          </div>
          <div className='mb-4 lg:ps-4 col-span-2 lg:col-span-1'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2 uppercase'
              htmlFor='destination'
            >
              Destino
            </label>
            <Autocomplete
              id='destination'
              value={destination}
              onChange={handleDestinationChange}
              options={cityOptions}
              placeholder='Ciudad de Destino'
            />
          </div>
          <div className='mb-4 lg:ps-4 md:w-full box-border'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2 uppercase'
              htmlFor='departure'
            >
              Ida
            </label>
            <DateInput
              id='departure_date'
              onChange={handleChange}
              value={formData.departure_date}
              min={getCurrentDate()}
            />
          </div>
          <div className='mb-4 md:ps-4  md:w-full box-border whitespace-nowrap'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2 truncate'
              htmlFor='return'
            >
              VUELTA (opcional)
            </label>
            <DateInput
              id='return_date'
              onChange={handleChange}
              value={returnDate}
              min={formData.departure_date}
            />
          </div>
          <div className='mb-4 lg:ps-4 col-span-2 lg:col-span-1'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2 uppercase'
              htmlFor='passengers'
            >
              Pasajeros
            </label>
            <NumberInput
              onQuantityChange={handlePassengersChange}
              quantityPassengers={formData.passengers}
            />
          </div>
        </div>
        <div className='lg:mb-4 lg:pl-4 flex items-end justify-center'>
          <SearchButton
            onClick={handleSearch}
            label='Buscar'
            url='/ticket'
            disabled={!formValid}
          />
        </div>
      </form>
    </div>
  );
};

export default FormSearchTravels;
