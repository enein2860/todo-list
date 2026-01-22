const Field = ({
  className,
  id,
  label,
  type = "text",
  value,
  onInput,
  inputRef,
}) => {
  return (
    <div className={className}>
      <label className="field__label" htmlFor={id}>
        {label}
      </label>
      <input
        ref={inputRef}
        className="field__input"
        id={id}
        placeholder=" "
        autoComplete="off"
        type={type}
        value={value}
        onInput={onInput}
      />
    </div>
  );
};

export default Field;