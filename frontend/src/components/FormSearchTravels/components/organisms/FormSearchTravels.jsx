import { useState } from 'react';
import SelectField from '../atoms/SelectField.jsx';
import DateInput from '../atoms/DateInput.jsx';
import NumberInput from '../molecules/NumberInput/NumberInput.jsx';
import SearchButton from '../atoms/SearchButton.jsx';

const FormSearchTravels = () => {
  const [formData, setFormData] = useState({
    origin: '',
    destination: '',
    departure_date: '',
    return_date: '',
    passengers: 0
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

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
      departure_date: '',
      return_date: '',
      passengers: 0
    });
  };

  const cityOptions = [
    { value: '', label: 'Ciudad' },
    { value: 'buenos-aires', label: 'Buenos Aires' },
    { value: 'cordoba', label: 'Córdoba' },
    { value: 'mendoza', label: 'Mendoza' },
    { value: 'bariloche', label: 'Bariloche' },
    { value: 'salta', label: 'Salta' }
  ];

  return (
    <div className='flex items-center justify-center px-6 md:px-0 lg:-mt-28 sm:-mt-10 -mt-8 py-6 '>
      <form className='bg-gray-200 rounded px-6 py-6 lg:flex md:w-auto w-full shadow-2xl shadow-slate-500/40'>
        <div className='grid lg:grid-cols-5 grid-cols-2 lg:divide-x-2 divide-gray-400 gap-4'>
          <div className='mb-4 col-span-2 lg:col-span-1'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2 uppercase'
              htmlFor='origin'
            >
              Origen
            </label>
            <SelectField
              id='origin'
              options={cityOptions}
              value={formData.origin}
              onChange={handleChange}
            />
          </div>
          <div className='mb-4 lg:ps-4 col-span-2 lg:col-span-1'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2 uppercase'
              htmlFor='destination'
            >
              Destino
            </label>
            <SelectField
              id='destination'
              options={cityOptions}
              value={formData.destination}
              onChange={handleChange}
            />
          </div>
          <div className='mb-4 lg:ps-4 md:w-full box-border'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2 uppercase'
              htmlFor='departure_date'
            >
              Ida
            </label>
            <DateInput
              id='departure_date'
              onChange={handleChange}
              value={formData.departure_date}
            />
          </div>
          <div className='mb-4 md:ps-4  md:w-full box-border whitespace-nowrap'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='return_date'
            >
              VUELTA (opcional)
            </label>
            <DateInput
              id='return_date'
              onChange={handleChange}
              value={formData.return_date}
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
          <SearchButton onClick={handleSearch} label='Buscar' />
        </div>
      </form>
    </div>
  );
};

export default FormSearchTravels;
