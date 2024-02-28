import { useState, useRef, useEffect } from 'react';
import AutocompleteIcon from '../atoms/AutocompleteIcon';
import PropTypes from 'prop-types';
import DropdownContent from '../molecules/DropdownContent/DropdownContent';

const Autocomplete = ({ id, value, onChange, options, placeholder }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState(options); // Estado para almacenar las opciones filtradas
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Agregar un event listener para cerrar el dropdown cuando se hace clic fuera de él
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Filtrar las opciones según lo que el usuario haya ingresado en el input
    const filtered = options.filter((city) =>
      city.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(filtered);
  }, [value, options]);

  const handleItemClick = (city) => {
    onChange({ target: { value: city } });
    setShowDropdown(false);
  };

  return (
    <div ref={dropdownRef} className='relative'>
      <input
        id={id}
        type='text'
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onClick={() => setShowDropdown(true)}
        className='appearance-auto xl:w-48 w-full bg-white border border-white text-gray-700 py-2 px-1 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
      />
      <AutocompleteIcon isOpen={showDropdown} />
      {showDropdown && (
        <DropdownContent
          filteredOptions={filteredOptions}
          onItemClick={handleItemClick}
        />
      )}
    </div>
  );
};

Autocomplete.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  placeholder: PropTypes.string.isRequired
};

export default Autocomplete;
