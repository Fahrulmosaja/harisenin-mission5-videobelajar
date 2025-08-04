// import React from "react";

import AuthLayout from "../../Layouts/AuthLayout";
import AuthRegister from "../../components/Fragments/AuthRegister";
import AuthNavbar from "../../components/Elements/AuthNavbar/AuthNavbar";

const RegisterPage = () => {
  return (
    <AuthLayout>
      <AuthNavbar />
      <AuthRegister />
    </AuthLayout>
  );
};

export default RegisterPage;
