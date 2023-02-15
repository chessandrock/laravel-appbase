import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'
import Error404 from '../pages/Error404'

/* Registration */
import Signup from '../pages/auth/Signup'
import Confirm from '../pages/auth/Confirm'

/* Login */
import Signin from '../pages/auth/Signin'
import Unlock from '../pages/auth/Unlock'

/* Password */
import ForgotPassword from '../pages/auth/ForgotPassword'
import RecoverPassword from '../pages/auth/RecoverPassword'
import ResetPassword from '../pages/auth/ResetPassword'

/* Signing out */
import Signout from '../pages/auth/Signout'

const Content = () => {
  return (
    <main className='p-6 grow'>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/auth/signup' element={<Signup />} />
        <Route exact path='/auth/confirm' element={<Confirm />} />
        <Route exact path='/auth/signin' element={<Signin />} />
        <Route exact path='/auth/unlock' element={<Unlock />} />
        <Route exact path='/auth/forgot_password' element={<ForgotPassword />} />
        <Route exact path='/auth/recover_password' element={<RecoverPassword />} />
        <Route exact path='/auth/reset_password' element={<ResetPassword />} />
        <Route exact path='/auth/signout' element={<Signout />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </main>
  )
}

export default Content
