import PropTypes from 'prop-types';

function HorizontalLabelPair({ leftLabel, rightLabel }) {
  return (
    <div className='flex justify-between items-center text-[#486284] text-sm font-medium mb-2'>
      <p>{leftLabel}</p>
      <p className='text-end'>{rightLabel}</p>
    </div>
  );
}

HorizontalLabelPair.propTypes = {
  leftLabel: PropTypes.string.isRequired,
  rightLabel: PropTypes.string.isRequired
};

export default HorizontalLabelPair;
