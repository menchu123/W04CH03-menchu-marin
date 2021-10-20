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

Action.propTypes = {
  text: PropTypes.string,
  actionOnClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

export default Action;
