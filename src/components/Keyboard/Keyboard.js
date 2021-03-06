import PropTypes from "prop-types";
import Key from "../Key/Key";
import "./Keyboard.css";

function Keyboard() {
  const keyArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "delete"];
  return (
    <>
      {keyArray.map((key) => (
        <Key key={key} text={key} />
      ))}
    </>
  );
}

Keyboard.propTypes = {
  isCalling: PropTypes.bool.isRequired,
};

export default Keyboard;
