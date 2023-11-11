import PropTypes from "prop-types";
const Image = ({ src , classes }) => {
  return (
    <img
      src={src}
      alt=""
      className={classes}
    />
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  classes : PropTypes.string.isRequired
};

export default Image;
