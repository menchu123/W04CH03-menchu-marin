import PropTypes from "prop-types";

function Key({ text, actionOnClick, isCalling }) {
  return (
    <li>
      <button
        className={`key${text === "delete" ? " big" : ""}`}
        onClick={actionOnClick}
        disabled={isCalling}
      >
        {text}
      </button>
    </li>
  );
}

Key.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  actionOnClick: PropTypes.func.isRequired,
  isCalling: PropTypes.bool.isRequired,
};

export default Key;
