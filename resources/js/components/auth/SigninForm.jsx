import React from 'react'

import { Link } from 'react-router-dom'

const SigninForm = () => {
  return (
    <>
      <header className='py-4 prose'>
        <h1>Ingreso</h1>
        <p className='mb-4'>
          ¿No tienes una cuenta?{' '}
          <Link to='/auth/signup' className='text-primary'>
            Regístrate aquí
          </Link>
        </p>
      </header>
      <form className='flex flex-col'>
        <label htmlFor='email' className='mb-4 w-full form-control'>
          <div className='label'>
            <span className='label-text'>Correo electrónico:</span>
          </div>
          <input
            type='email'
            id='email'
            placeholder='Escribe tu correo electrónico'
            className='w-full input input-bordered'
          />
        </label>
        <label htmlFor='password' className='mb-4 w-full form-control'>
          <div className='label'>
            <span className='label-text'>Contraseña:</span>
          </div>
          <input
            type='password'
            id='password'
            placeholder='Escribe tu contraseña'
            className='w-full input input-bordered'
          />
        </label>
        <div className='flex flex-row flex-wrap mb-4'>
          <div className='form-control'>
            <label className='cursor-pointer label'>
              <input type='checkbox' id='remember_me' className='mr-2 checkbox' />
              <span className='label-text'>Recordar sesión</span>
            </label>
          </div>
        </div>
        <button type='submit' className='mb-4 rounded-xl btn btn-primary'>
          Ingresar
        </button>
        <div className='form-control'>
          <Link to='/auth/forgot_password' className='text-primary'>
            ¿Olvidaste tu contraseña?
          </Link>
        </div>
      </form>
    </>
  )
}

export default SigninForm
