import PropTypes from "prop-types";

function Info({ isCalling }) {
  return (
    <span className={`message${isCalling ? "" : " off"}`}>Calling...</span>
  );
}

Info.propTypes = {
  isCalling: PropTypes.bool.isRequired,
};

export default Info;
