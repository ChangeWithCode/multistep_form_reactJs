import PropTypes from "prop-types";

const SubmitButton = ({handleSubmit}) => {
    return (  <button
        className="inline-block cursor-pointer rounded-xl bg-black px-8 py-4 text-center font-semibold text-white no-underline [box-shadow:rgb(19,_83,_254)_6px_6px]"
        onClick={handleSubmit}
      >
        Submit
      </button> );
}
 
SubmitButton.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };


export default SubmitButton;