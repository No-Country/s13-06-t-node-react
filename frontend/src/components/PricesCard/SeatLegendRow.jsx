import PropTypes from 'prop-types';

SeatLegendRow.propTypes = {
  colorClass: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

function SeatLegendRow({ colorClass, text }) {
  return (
    <div className='flex items-center  '>
      <div
        className={
          colorClass
            ? `size-5 rounded-md mr-2 ${colorClass}`
            : 'size-5 rounded-md mr-2'
        }
      ></div>
      <p className='text-[#A0A0A0] font-medium text-sm'>{text}</p>
    </div>
  );
}

export default SeatLegendRow;
