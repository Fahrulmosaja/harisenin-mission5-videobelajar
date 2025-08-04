import { FaAngleDown } from "react-icons/fa6";

import type { FormInputProps } from "./types";
import Input from "./Input";
import Label from "./Label";

const NumberPhone: React.FC<FormInputProps> = ({
  className,
  label,
  type,
  name,
  value,
  onChange,
  placeholder
}) => {

  return (
    <div className='flex flex-col gap-2'>
      <Label
        className="text-textDark-secondary text-sm"
        htmlFor={name}
        text={label}
      />
      <div className='flex items-center justify-end gap-3'>

        <div className=" border border-gray-300 flex items-center h-full gap-3 rounded">
          <div className="bg-textDark-tertiary p-2 rounded">
            <img
              className="w-20 sm:w-15"
              src="/logo/Indonesia.png"
              alt="" />
          </div>
          <div className="flex items-center">
            <span className="">+62</span>
            <span className="pl-2">
              <FaAngleDown
                className="pr-2 w-5"
              />
            </span>
          </div>
        </div>

        <Input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={className = "w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-main-primary"}
        />
      </div>
    </div>
  );
};

export default NumberPhone;