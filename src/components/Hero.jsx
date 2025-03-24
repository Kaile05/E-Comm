import React from 'react'
import man from '../assets/man.png'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className='min-h-screen flex justify-center items-start'>
        <div className='grid grid-cols-1 md:grid-cols-2 mt-5'>
          <div className='bg-white rounded'>
            <div className='p-6'>
              <h1 className='text-3xl md:text-5xl text-center font-bold'>Shop the <span className='text-gray-600'>Future</span>, Today!</h1>
              <img src={man} className='h-full w-full object-cover hover:drop-shadow-2xl transition' alt='man'/>
            </div>
          </div>
          <div className='bg-gray-600 rounded'> 
            <div className='p-6'>
              <h1 className='text-5xl md:text-8xl text-white'>Fast.<br></br> Easy.<br></br> Binge <br></br>Shopping</h1>
              <div>
                <Link to='/products' className='rounded text-3xl py-4 px-8 bg-black text-white mt-6 inline-block hover:ring-1 hover:ring-black hover:bg-white hover:text-black transition'>Shop Now!</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Hero