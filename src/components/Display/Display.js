import PropTypes from "prop-types";

function Display({ numbers }) {
  return <span className="number">{numbers.join("")}</span>;
}

Display.propTypes = {
  numbers: PropTypes.array.isRequired,
};

export default Display;
