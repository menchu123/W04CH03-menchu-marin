import PropTypes from "prop-types";

function Info({ isCalling }) {
  return (
    <span data-testid="info" className={`message${isCalling ? "" : " off"}`}>
      Calling...
    </span>
  );
}

Info.propTypes = {
  isCalling: PropTypes.bool.isRequired,
};

export default Info;
