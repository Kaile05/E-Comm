import React from 'react'
import { Link } from 'react-router-dom'


function Nav() {
  return (
    <nav className='flex w-full bg-white space-x-20 py-3 px-6 items-center justify-center shadow-2xl'>
      <h1>LOGO</h1>
      <ul className="flex space-x-4 ">
        <li>
          <Link to="/" className='relative text-xl before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-black before:transition-all before:duration-300 hover:before:w-full'>Home</Link>
        </li>
        <li>
          <Link to="/products" className='relative text-xl before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-black before:transition-all before:duration-300 hover:before:w-full'>Products</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav