import PropTypes from "prop-types";
import Action from "../Action/Action";

function Actions({ isCalling, isDisabled }) {
  return (
    <>
      {isCalling ? (
        <Action
          text="Hang"
          actionOnClick={() => console.log("Hang")}
          className="hang"
          isDisabled={isDisabled}
        />
      ) : (
        <Action
          text="Call"
          actionOnClick={() => console.log("Call")}
          className="call"
          isDisabled={isDisabled}
        />
      )}
    </>
  );
}

Actions.propTypes = {
  isCalling: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

export default Actions;
