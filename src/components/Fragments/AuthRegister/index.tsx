import React, { useState } from 'react';

import { FaGoogle } from "react-icons/fa";
import FormInput from '../../Elements/FormInput';
import Button from '../../Elements/Button';

const AuthRegister: React.FC = () => {
  const [formData, setFormData] = useState({
    text: '',
    email: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="px-3 mt-25">
      <form className='flex flex-col gap-5 bg-default-white px-5 shadow-md py-6 rounded-md sm:w-1/2 md:w-1/3 mx-auto'>
        <div className="text-center">
          <h1 className="text-2xl text-textDark-primary font-bold tracking-wide font-poppins">Masuk Ke Akun</h1>
          <p className="text-sm text-textDark-secondary mt-2">Yuk, lanjutkan belajarmu di VideoBelajar</p>
        </div>
        <FormInput
          label="Nama Lengkap"
          type="text"
          name="text"
          value={formData.text}
          onChange={handleInputChange}
        />
        <FormInput
          label="E-Mail"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />

        <FormInput
          label="Kata Sandi"
          type="password"
          name="password"
        />

        <FormInput
          label="Konfirmasi Kata Sandi"
          type="password"
          name="confirmPassword"
        />

        <p className="text-right text-textDark-primary hover:text-textDark-secondary text-sm curson-pointer">
          <a href="#" >Lupa Password?</a>
        </p>

        <Button
          variant="btn-primary"
          onClick={() => console.log("Button clicked")}
          className="py-2 px-4 rounded-md cursor-pointer"
          children="Daftar"
        />
        <Button
          variant="btn-tertiary"
          onClick={() => console.log("Button clicked")}
          className="py-2 px-4 rounded-md cursor-pointer"
          children="Masuk"
        />

        <div className="relative bg-textDark-tertiary h-0.5 my-2">
          <p className="absolute bg-default-white p-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-textDark-primary text-sm">atau </p>
        </div>

        <Button
          variant="btn-default"
          onClick={() => console.log("Button clicked")}
          className="py-2 px-4 rounded-md cursor-pointer bg-default-white shadow-md text-textDark-primary flex items-center justify-center gap-3 mb-2"
        >
          <FaGoogle className="text-sm" />
          <p className='text-sm'>Masuk Dengan Google</p>
        </Button>
      </form >
    </div >
  );
};

export default AuthRegister;
