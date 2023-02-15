import React from 'react'

import ForgotPasswordForm from '../../auth/ForgotPasswordForm'

const ForgotPassword = () => {
  return (
    <div className='w-full'>
      <div className='p-8 m-auto w-full rounded-xl border border-gray-400 xs:w-full sm:w-3/4 md:w-3/4 lg:w-1/2 xl:w-1/3'>
        <ForgotPasswordForm />
      </div>
    </div>
  )
}

export default ForgotPassword
