function Key({ text, actionOnClick }) {
  return (
    <li>
      <button className="key" onClick={actionOnClick}>
        {text}
      </button>
    </li>
  );
}

export default Key;
