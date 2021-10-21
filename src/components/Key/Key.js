import PropTypes from "prop-types";
import { useContext } from "react";
import Context from "../Context/Context";
import "./Key.css";

function Key({ text }) {
  const { getNumber, deleteNumber, isCalling } = useContext(Context);
  return (
    <li>
      <button
        className={`key${text === "delete" ? " big" : ""}`}
        onClick={text === "delete" ? deleteNumber : (event) => getNumber(event)}
        disabled={isCalling}
      >
        {text}
      </button>
    </li>
  );
}

Key.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Key;
