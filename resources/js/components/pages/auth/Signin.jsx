import React from 'react'

import SigninForm from '../../auth/SigninForm'

const Signin = () => {
  return (
    <div className='w-full'>
      <div className='p-4 m-auto w-full rounded-xl border border-gray-400 md:p-8 bg-base-100 xs:w-full sm:w-3/4 md:w-3/4 lg:w-1/2 xl:w-1/3'>
        <SigninForm />
      </div>
    </div>
  )
}

export default Signin
