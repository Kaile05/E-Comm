import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails({products}) {

  const {id} = useParams()
  const product = products.find((p)=>p.id.toString()===id)

  if (!product) return <p>product not found</p>;

  return (
    <>
      <main className='p-10 grid grid-cols-2 max-md:grid-cols-1 mt-4'>
        <div className='bg-slate-300 rounded'>
          <div className='p-10'>
            <div className='rounded'>
              <img src={product.thumbnail} alt={product.title} className='w-full h-full object-cover' />
            </div>
          </div>
        </div>
        <div className='bg-white rounded'>
          <div className='p-10'>
            <h2 className="mt-4 text-2xl md:text-4xl">Item name: <span className='font-bold'>{product.title}</span></h2>
            <p className="text-xl mt-2 md:text-3xl">Price: <span className='font-semibold'>${product.price}</span></p>
            <p className="mt-2 text-sm md:text-2xl">Description: {product.description}</p>
            <p className='text-sm mt-2 md:text-2xl'>Category: {product.category}</p>
            <p className='text-sm mt-2 md:text-2xl'>Rating: ⭐ {product.rating} / 5</p>
            <button className='mt-4 py-4 px-8 rounded bg-green-300 hover:bg-green-200 transition'>Add to Cart</button>
          </div>
        </div>
      </main>
    </>
  )
}

export default ProductDetails