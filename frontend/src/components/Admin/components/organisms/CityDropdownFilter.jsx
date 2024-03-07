import { useState, useEffect, useRef } from 'react';
import IconFilter from '../../../../assets/CityDropdownFilter/Filter.svg';
import IconArrowDown from '../../../../assets/CityDropdownFilter/ArrowDown.svg';
import PropTypes from 'prop-types';

function CityDropdownFilter({
  onCitySelect,
  onRemoveCity,
  selectedCities,
  label,
  cityStatesObj
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [cityStates, setCityStates] = useState(cityStatesObj);

  const cities = Object.keys(cityStates);
  const dropdownRef = useRef(null);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (city) => {
    let updatedCityStates;

    // Verificar si la ciudad ya está seleccionada
    const cityIsSelected = cityStates[city];

    // Si la ciudad ya está seleccionada, quitarla
    if (cityIsSelected) {
      updatedCityStates = { ...cityStates, [city]: false };
      onRemoveCity(city);
    } else {
      // Si la ciudad no está seleccionada, seleccionarla
      updatedCityStates = { ...cityStates, [city]: true };
    }
    setCityStates(updatedCityStates);

    // Llama a onCitySelect solo si la ciudad no estaba previamente seleccionada
    if (!cityIsSelected) {
      onCitySelect(city);
    }
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setCityStates((prevCityStates) => {
      const updatedCityStates = { ...prevCityStates };

      // Itera sobre las ciudades en cityStates
      Object.keys(updatedCityStates).forEach((city) => {
        // Actualiza el estado del checkbox según si la ciudad está en selectedCities o no
        updatedCityStates[city] = selectedCities.includes(city);
      });

      // Devuelve las ciudades actualizadas
      return updatedCityStates;
    });
  }, [selectedCities]);

  return (
    <div className='relative w-64 mr-2' ref={dropdownRef}>
      <button
        className='flex items-center h-[2rem] w-64 justify-between bg-[#ff5f00c9] text-white font-medium text-sm px-6 py-2 rounded'
        onClick={handleButtonClick}
      >
        <img src={IconFilter} alt='Icon' className='w-5 h-4 mr-2' />
        {label}
        <img
          src={IconArrowDown}
          alt='Icon'
          className={`w-5 h-3 ml-2 transform transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className='absolute top-full left-0 w-full bg-white border border-gray-300 rounded-b-md shadow-lg mt-1 py-2 z-20'>
          {cities.map((city) => (
            <label
              key={city}
              className='block px-6 py-2 cursor-pointer text-black text-sm font-normal'
            >
              <input
                type='checkbox'
                onChange={() => handleCheckboxChange(city)}
                checked={cityStates[city]}
                className='mr-2'
                style={{ accentColor: '#ff5f00' }}
              />
              {city}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

CityDropdownFilter.propTypes = {
  onCitySelect: PropTypes.func.isRequired,
  onRemoveCity: PropTypes.func.isRequired,
  onRemoveAll: PropTypes.func.isRequired,
  selectedCities: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  cityStatesObj: PropTypes.object.isRequired
};

export default CityDropdownFilter;
