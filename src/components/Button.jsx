const Button = ({ className, type = 'button', children = '' }) => {
  return (
    <button className={className} type={type}>
      {children}
    </button>
  )
}

export default Button
