import PropTypes from "prop-types";

function Key({ text, actionOnClick, isCalling }) {
  return (
    <li>
      <button className="key" onClick={actionOnClick} disabled={isCalling}>
        {text}
      </button>
    </li>
  );
}

Key.propTypes = {
  text: PropTypes.string,
  actionOnClick: PropTypes.func.isRequired,
};

export default Key;
