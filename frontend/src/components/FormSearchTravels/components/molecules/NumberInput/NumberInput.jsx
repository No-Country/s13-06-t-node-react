import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import IncrementButton from '../../atoms/IncrementButton';
import DecrementButton from '../../atoms/DecrementButton';
import InputFieldNumber from '../../atoms/InputFieldNumber';

function NumberInput({ onQuantityChange, quantityPassengers }) {
  const [quantity, setQuantity] = useState(quantityPassengers);

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange(newQuantity);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  useEffect(() => {
    setQuantity(quantityPassengers);
  }, [quantityPassengers]);

  return (
    <div className='lg:max-w-xs lg:mx-auto lg:mb-0 mb-2'>
      <div className='relative flex items-center lg:max-w-[8rem] w-full'>
        <DecrementButton onClick={handleDecrement} />
        <InputFieldNumber id='passengers' value={quantity} />
        <IncrementButton onClick={handleIncrement} />
      </div>
    </div>
  );
}

NumberInput.propTypes = {
  onQuantityChange: PropTypes.func,
  quantityPassengers: PropTypes.number
};

export default NumberInput;
