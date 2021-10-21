import PropTypes from "prop-types";
import "./Display.css";

function Display({ numbers }) {
  return <span className="number">{numbers.join("")}</span>;
}

Display.propTypes = {
  numbers: PropTypes.array.isRequired,
};

export default Display;
