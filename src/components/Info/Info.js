function Info({ isCalling }) {
  return (
    <span className={`message${isCalling ? "" : " off"}`}>Calling...</span>
  );
}

export default Info;
