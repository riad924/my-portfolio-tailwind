function Button({
  children,
  type = "button",
  onClick,
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-lg px-5 py-2.5 font-semibold transition ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;