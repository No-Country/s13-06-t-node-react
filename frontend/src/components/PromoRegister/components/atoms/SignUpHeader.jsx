import PropTypes from 'prop-types';

const SignUpHeader = ({ title }) => {
  return (
    <h1
      className='text-white text-center font-semibold mb-4'
      style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}
    >
      {title}
    </h1>
  );
};

SignUpHeader.propTypes = {
  title: PropTypes.string.isRequired
};

export default SignUpHeader;
