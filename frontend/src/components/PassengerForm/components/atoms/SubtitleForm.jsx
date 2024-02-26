import PropTypes from 'prop-types';

function SubtitleForm({ subtitle }) {
  return (
    <h3 className='text-[#486284] text-center font-medium text-base uppercase mb-2'>
      {subtitle}
    </h3>
  );
}

SubtitleForm.propTypes = {
  subtitle: PropTypes.string.isRequired
};

export default SubtitleForm;
