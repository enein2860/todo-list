const Button = ({ className, type = "button", onClick, children, isDisabled }) => {
  return (
    <button className={className} type={type} onClick={onClick} disabled={isDisabled}>
      {children}
    </button>
  );
};

export default Button;
