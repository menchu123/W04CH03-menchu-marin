import PropTypes from "prop-types";
import { useContext } from "react";
import Context from "../Context/Context";

function Action({ text, className, isDisabled }) {
  const { call, hang } = useContext(Context);
  return (
    <a
      href="action"
      onClick={
        text === "Call" ? (event) => call(event) : (event) => hang(event)
      }
      className={className + (isDisabled ? "" : " active")}
    >
      {text}
    </a>
  );
}

Action.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

export default Action;
