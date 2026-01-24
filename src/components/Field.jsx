const Field = ({
  className,
  id,
  label,
  type = "text",
  value,
  onInput,
  inputRef,
  error,
}) => {
  return (
    <div className={className}>
      <label className="field__label" htmlFor={id}>
        {label}
      </label>
      <input
        ref={inputRef}
        className={`field__input ${error ? "field__input--error" : ""}`}
        id={id}
        placeholder=" "
        autoComplete="off"
        type={type}
        value={value}
        onInput={onInput}

      />
      {error && (<span className="field__error">{error}</span>)}
    </div>
  );
};

export default Field;
