import PropTypes from "prop-types";
import { useContext } from "react";
import Context from "../Context/Context";

function Key({ text, isCalling }) {
  const { getNumber } = useContext(Context);
  return (
    <li>
      <button
        className={`key${text === "delete" ? " big" : ""}`}
        onClick={(event) => getNumber(event)}
        disabled={isCalling}
      >
        {text}
      </button>
    </li>
  );
}

Key.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isCalling: PropTypes.bool.isRequired,
};

export default Key;
