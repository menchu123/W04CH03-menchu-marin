import PropTypes from "prop-types";
import Action from "../Action/Action";
import "./Actions.css";

function Actions({ isCalling, isDisabled }) {
  return (
    <>
      {isCalling ? (
        <Action text="Hang" className="hang" isDisabled={isDisabled} />
      ) : (
        <Action text="Call" className="call" isDisabled={isDisabled} />
      )}
    </>
  );
}

Actions.propTypes = {
  isCalling: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

export default Actions;
