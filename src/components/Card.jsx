import React from 'react'
import { Link } from 'react-router-dom'

function Card({product}) {
  return (
    <li key={product.id}>
      <div className='rounded p-3 bg-white shadow-2xs hover:ring-1 hover:ring-gray-300 hover:shadow-2xl transition'>
        <img 
          src={product.thumbnail} alt={product.title}
          className='w-full mx-auto h-50 rounded'
        />
        <h3 className='font-bold'>{product.title}</h3>
        <p>Price: <span className='text-orange-400 font-semibold'>${product.price}</span></p>
        <p>Ratings:<span className='text-yellow-500'>⭐{product.rating}/5</span></p>
        <Link to={`/products/${product.id}`} className='text-blue-600'>View Details</Link>
      </div>
    </li>
  )
}

export default Card