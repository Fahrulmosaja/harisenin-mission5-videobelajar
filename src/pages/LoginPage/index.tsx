// import React from 'react'

import AurhLayout from '../../Layouts/AuthLayout'
import AuthLogin from '../../components/Fragments/AuthLogin'
import AuthNavbar from '../../components/Elements/AuthNavbar/AuthNavbar'

const LoginPage = () => {
  return (
    <AurhLayout>
      <AuthNavbar />
      <AuthLogin />
    </AurhLayout>
  )
}

export default LoginPage