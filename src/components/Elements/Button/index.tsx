import type { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  onClick,
  variant,
  ...rest
}) => {
  return (
    <button
      className={`${variant} ${className}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;