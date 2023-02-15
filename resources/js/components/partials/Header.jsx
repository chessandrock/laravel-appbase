import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='navbar bg-primary text-primary-content'>
      <div className='flex-1'>
        <button className='text-xl btn btn-ghost' href='#'>
          Your Logo Here
        </button>
      </div>
      <div className='flex-none'>
        <ul className='px-1 menu menu-horizontal'>
          <li>
            <Link to='/' className='btn btn-ghost'>Home</Link>
          </li>
          <li>
            <Link to='/about' className='btn btn-ghost'>About</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
