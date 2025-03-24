import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <section className='min-h-screen flex items-start justify-center bg-black' id='about'>
      <div className='text-white mt-6'>
        <h1 className='text-3xl md:text-5xl text-center'>About</h1>
        <p className='text-center p-7'>Our Story: The Future of Shopping Begins Here.</p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            <div className='p-7'>
              <p className='text-2xl md:text-4xl text-justify py-3 px-6'>At BingeBuy, we bring you the latest trends, unbeatable deals, and a seamless shopping experience. Our goal? To make shopping fast, fun, and binge-worthy!</p>
            </div>
          <div className='p-7'>
            <h2 className='py-3 px-6 text-2xl md:text-3xl'>Features</h2>
            <p className='text-lg'>🛍️ Wide Selection – Thousands of products at your fingertips</p>
            <p className='text-lg'>🚀 Fast & Secure Checkout – Hassle-free and secure transactions</p>
            <p className='text-lg'>🔥 Exclusive Deals – Shop smart with daily discounts</p>
            <p className='text-lg'>📦 Reliable Shipping – Fast delivery to your doorstep</p>
            <div>
              <Link to='/products' className='rounded text-3xl py-4 px-8 bg-white text-black mt-6 inline-block hover:ring-1 hover:ring-white hover:bg-black hover:text-white transition'>Shop Now!</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About