import type React from "react";
import type { InputProps } from "./types";

const Input: React.FC<InputProps> = ({
  className,
  type,
  name,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <input
      className={className}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;