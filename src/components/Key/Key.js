function Key({ text, actionOnClick }) {
  return (
    <li>
      <button className="key" actionOnClick={actionOnClick}>
        {text}
      </button>
    </li>
  );
}

export default Key;
