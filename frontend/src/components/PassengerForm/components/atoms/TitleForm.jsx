import PropTypes from 'prop-types';

function TitleForm({ title }) {
  return (
    <h1 className='text-[#1A202C] text-3xl text-center font-semibold mb-2'>
      {title}
    </h1>
  );
}

TitleForm.propTypes = {
  title: PropTypes.string.isRequired
};

export default TitleForm;
