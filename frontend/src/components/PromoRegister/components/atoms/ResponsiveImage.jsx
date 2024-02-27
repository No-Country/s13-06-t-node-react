import PropTypes from 'prop-types';

const ResponsiveImage = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={className} />;
};

ResponsiveImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default ResponsiveImage;
