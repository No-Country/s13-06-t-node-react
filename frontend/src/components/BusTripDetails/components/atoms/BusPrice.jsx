import PropTypes from 'prop-types';

function BusPrice({ BusIcon, price }) {
  return (
    <div className='flex justify-between items-center text-[#1A202C] text-base font-bold box-border'>
      <p>
        <img src={BusIcon} alt='Icon' />
      </p>
      <p>${price}</p>
    </div>
  );
}

BusPrice.propTypes = {
  BusIcon: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
};

export default BusPrice;
