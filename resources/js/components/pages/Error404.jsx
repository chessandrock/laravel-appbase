import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div className='w-full'>
      <h1 className='text-2xl'>
        Error 404
      </h1>
      <p>
        Página no encontrada.
        <Link to='/' className='font-bold'>Haga click aquí</Link> para volver al inicio de la aplicación.
      </p>
    </div>
  )
}

export default Error404
