const Button = ({ onClick = () => {}, className, type = 'button', bgColor = 'primary', children }) => {
  let bgClassName;

  switch (bgColor) {
    case 'primary':
      bgClassName = 'bg-primary';
      break;
    case 'secondary':
      bgClassName = 'bg-secondary';
      break;
    default:
      bgClassName = bgColor;
      break;
  }

  return (
    <button
      type={type}
      className={`mt-auto py-3 px-6 rounded-lg capitalize ${bgClassName} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
