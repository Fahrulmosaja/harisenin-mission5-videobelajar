import type React from "react";
import type { LabelProps } from "./types";


const Label: React.FC<LabelProps> = ({
  className,
  htmlFor,
  text
}) => {
  return (
    <label
      className={className}
      htmlFor={htmlFor}
    >
      {text}
    </label>
  );
};

export default Label;