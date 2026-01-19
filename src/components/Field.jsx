const Field = ({ className, id, label, type = 'text', ...props }) => {
  return (
    <div className={className}>
      <label
        className="field__label"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="field__input"
        id={id}
        placeholder=" "
        autoComplete="off"
        type={type}
        {...props}
      />
    </div>
  )
}

export default Field
