import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";

import type { FormInputProps } from './types';
import Label from './Label';
import Input from './Input';

const FormInput: React.FC<FormInputProps> = ({
  className,
  label,
  type,
  name,
  value,
  onChange,
  placeholder
}) => {

  const [showPassword, setShowPassword] = useState(type !== 'password');

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className='flex flex-col gap-2'>
      <Label
        className="text-textDark-secondary text-sm"
        htmlFor={name}
        text={label}
      />
      <div className='relative flex items-center justify-end'>
        <Input
          type={showPassword ? '' : type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${className} ${type === 'password' ?
            "w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-main-primary"
            : "w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-main-primary"}`}
        />
        {type === 'password' && (
          <span
            onClick={togglePasswordVisibility}
            className="absolute right-3 cursor-pointer"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        )}
      </div>
    </div>
  );
};

export default FormInput;