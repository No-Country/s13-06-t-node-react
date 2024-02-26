import PropTypes from 'prop-types';

function ServiceLabel({ text }) {
  return (
    <div className='flex items-center justify-end text-[#3A556A] font-medium text-sm'>
      <p>{text}</p>
    </div>
  );
}

ServiceLabel.propTypes = {
  text: PropTypes.string.isRequired
};

export default ServiceLabel;
