import PropTypes from "prop-types";
import { useContext } from "react";
import Context from "../Context/Context";

function Action({ text, className, isDisabled }) {
  const { call, hang } = useContext(Context);

  const callFunction = (event) => {
    event.preventDefault();
    call();
  };

  const hangFunction = (event) => {
    event.preventDefault();
    hang();
  };

  return (
    <a
      href="action"
      onClick={
        text === "Call"
          ? (event) => callFunction(event)
          : (event) => hangFunction(event)
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
