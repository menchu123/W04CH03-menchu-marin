import PropTypes from "prop-types";

function Key({ text, actionOnClick }) {
  return (
    <li>
      <button className="key" onClick={actionOnClick}>
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
