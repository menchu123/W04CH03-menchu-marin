import PropTypes from "prop-types";
import Action from "../Action/Action";

function Actions({ isCalling, isDisabled }) {
  return (
    <>
      {isCalling ? (
        <Action
          text="Hang"
          actionOnClick={() => {}}
          className="hang"
          isDisabled={isDisabled}
        />
      ) : (
        <Action
          text="Call"
          actionOnClick={() => {}}
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
