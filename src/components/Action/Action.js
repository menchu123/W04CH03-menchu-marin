import PropTypes from "prop-types";

function Action({ text, actionOnClick, className, isDisabled }) {
  return (
    <a
      href="#"
      onClick={actionOnClick}
      className={className + (isDisabled ? "" : " active")}
    >
      {text}
    </a>
  );
}

// Action.propTypes = {
//   numbers: PropTypes.array.isRequired,
// };

export default Action;
