import { useState } from 'react';

const useAutocomplete = (initialValue) => {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleChange = (newValue) => {
    setInputValue(newValue);
  };

  const resetInputState = () => {
    setInputValue('');
  };

  return { inputValue, handleChange, resetInputState };
};

export default useAutocomplete;
