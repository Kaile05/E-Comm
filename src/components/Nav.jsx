import React from 'react';
import { Link } from 'react-router-dom';

function Nav({ cartItemCount }) {
  return (
    <nav className='flex w-full bg-white space-x-20 py-3 px-6 items-center justify-center shadow-2xl fixed top-0 z-50'>
      <Link to='/' className='text-xl'>
        <span className='text-gray-600'>Binge</span>Buy
      </Link>
      <ul className="flex space-x-4">
        <li>
          <Link 
            to="/" 
            className='relative text-sm md:text-xl before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-black before:transition-all before:duration-300 hover:before:w-full'
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="/products" 
            className='relative text-sm md:text-xl before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-black before:transition-all before:duration-300 hover:before:w-full'
          >
            Products
          </Link>
        </li>
        <li className='relative'>
          <Link 
            to='/cart' 
            className='relative text-sm md:text-xl flex items-center space-x-1'
          >
              Cart
            {cartItemCount > 0 && (
              <span className='absolute -top-2 -right-3 bg-red-400 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full'>
                {cartItemCount}
              </span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
