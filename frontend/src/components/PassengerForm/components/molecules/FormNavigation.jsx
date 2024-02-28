import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import LeftButton from '../atoms/LeftButton';
import RightButton from '../atoms/RightButton';
import PassengerNumber from '../atoms/PassengerNumber';
import PassengerDropdownButton from '../molecules/PassengerDropdownButton';

function FormNavigation({ passenger, onClick, isAuth }) {
  const [currentPassenger, setCurrentPassenger] = useState(1);

  useEffect(() => {
    setCurrentPassenger(1);
  }, [passenger]);

  const handleRightClick = () => {
    setCurrentPassenger((prevPassenger) =>
      Math.min(prevPassenger + 1, passenger)
    );
  };

  const handleLeftClick = () => {
    setCurrentPassenger((prevPassenger) => Math.max(prevPassenger - 1, 1));
  };

  return (
    <div
      className={`flex justify-between items-center bg-meadow-green text-white p-2 rounded shadow relative z-30`}
    >
      {passenger > 1 && <LeftButton onClick={handleLeftClick} />}
      <PassengerNumber currentPassenger={currentPassenger} />
      {!isAuth ? (
        <RightButton onClick={handleRightClick} />
      ) : (
        <PassengerDropdownButton onChange={onClick} />
      )}
    </div>
  );
}

FormNavigation.propTypes = {
  passenger: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  isAuth: PropTypes.bool.isRequired
};

export default FormNavigation;
