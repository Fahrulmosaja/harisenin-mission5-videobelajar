import { useState } from "react";

export const useShowPassword = (type: string) => {
  const [showPassword, setShowPassword] = useState(type !== 'password');

  // const togglePasswordVisibility = () => {
  //   setShowPassword((prevState) => !prevState);
  // };

  return { showPassword, setShowPassword };
}
