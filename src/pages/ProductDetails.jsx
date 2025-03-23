import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails() {

  const {id} = useParams()
  const[product, setProduct] = useState(null)

  useEffect(()=>{
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`)
        const data = await response.json()
        setProduct(data)
        console.log(data)
      } catch (error) {
        console.error('error fetching data', error)
      }
    }
    fetchProduct()
  },[id])

  if (!product) return <p>Loading...</p>;

  return (
    <>
      <div className='p-10 grid grid-cols-2 max-md:grid-cols-1'>
        <div className='bg-slate-300 rounded'>
          <div className='p-10 text-center'>
            <div className='rounded hover:bg-white transition hover:shadow-2xl'>
              <img src={product.thumbnail} alt={product.title} className='w-full h-70' />
            </div>
            <p className="text-lg font-semibold mt-2">Price: ${product.price}</p>
            <p>Stock:{product.stock}</p>
            <p>Minimum Order Quantity: {product.minimumOrderQuantity}</p>
          </div>
        </div>
        <div className='bg-white rounded'>
          <div className='p-10'>
            <h2 className="text-2xl font-bold">Item name: {product.title}</h2>
            <p className="mt-2 text-sm md:text-2xl">Description: {product.description}</p>
            <p className='text-sm mt-2 md:text-xl'>Brand: {product.brand}</p>
            <p className='text-sm mt-2 md:text-xl'>Category: {product.category}</p>
            <p className='text-sm mt-2 md:text-xl'>Rating: ⭐ {product.rating} / 5</p>
            <button className='mt-4 py-4 px-8 rounded bg-green-300 hover:bg-green-200 transition'>Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetails