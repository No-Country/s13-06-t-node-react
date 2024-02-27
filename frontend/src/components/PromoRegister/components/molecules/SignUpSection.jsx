import PropTypes from 'prop-types';
import SignUpHeader from '../atoms/SignUpHeader';
import RegisterButton from '../atoms/RegisterButton';

const SignUpSection = ({ title, buttonText, buttonHref }) => {
  return (
    <>
      <SignUpHeader title={title} />
      <RegisterButton href={buttonHref} text={buttonText} />
    </>
  );
};

SignUpSection.propTypes = {
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonHref: PropTypes.string.isRequired
};

export default SignUpSection;
