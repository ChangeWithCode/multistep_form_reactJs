import PropTypes from 'prop-types';
const BackButton = ({handleBack}) => {
    return ( 

        <button
        className="inline-block cursor-pointer rounded-xl bg-black px-8 py-4 text-center font-semibold text-white no-underline [box-shadow:rgb(19,_83,_254)_6px_6px]"
        onClick={handleBack}
      >
        Back
      </button>


     );
}

BackButton.propTypes = {
    handleBack: PropTypes.func.isRequired,
  };
  

export default BackButton;