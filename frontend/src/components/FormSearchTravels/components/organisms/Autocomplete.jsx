import PropTypes from 'prop-types';
import { useRef, useState, useEffect } from 'react';
import AutocompleteInput from '../atoms/AutocompleteInput';
import AutocompleteIcon from '../atoms/AutocompleteIcon';
import DropdownContent from '../molecules/DropdownContent/DropdownContent';
import useAutocomplete from '../../hooks/useAutocomplete';

const Autocomplete = ({ id, items, value, onChange, resetInput }) => {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  const { inputValue, handleChange, resetInputState } = useAutocomplete(value);
  const [filteredItems, setFilteredItems] = useState([]);

  const handleInputChange = (inputValue) => {
    handleChange(inputValue);
    const filtered = items.filter((item) =>
      item.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredItems(filtered);
    setOpen(true);

    onChange({ target: { id: id, value: inputValue } });
  };

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setOpen(false);
    }
  };

  const handleInputClick = () => {
    setOpen(true);
  };

  const handleItemClick = (item) => {
    const event = { target: { id: id, value: item } };
    onChange(event);
    handleChange(item);
    setOpen(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (resetInput) {
      resetInputState();
    }
  }, [resetInput, resetInputState]);

  return (
    <div
      className={`relative z-1 dropdown w-full  ${open ? 'dropdown-open' : ''}`}
      ref={ref}
    >
      <AutocompleteInput
        id={id}
        name={id}
        value={inputValue}
        onChange={(e) => handleInputChange(e.target.value)}
        onClick={handleInputClick}
        placeholder='Capital'
      />
      <AutocompleteIcon />
      {open && (
        <DropdownContent
          filteredItems={filteredItems}
          handleItemClick={handleItemClick}
        />
      )}
    </div>
  );
};

Autocomplete.propTypes = {
  id: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  resetInput: PropTypes.bool.isRequired
};

export default Autocomplete;
