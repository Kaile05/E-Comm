import React, { useEffect, useState } from 'react'
import Card from '../components/Card'


function Products() {

  const[products, setProducts] = useState([])

  useEffect(()=>{
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products')
        const data = await response.json()
        setProducts(data.products)
        console.log (data.products)
      } catch (error) {
        console.error('error fetching data', error)
      }
    }

    fetchProducts()

  },[])

  return (
    <main className='p-10 flex flex-col justify-center items-center'>
      <h1 className='text-5xl font-bold'>Products</h1>
      <div>
        <ul>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5'>
            {products.map((product)=>(
              <Card product={product}/>
            ))}
          </div>
        </ul>
      </div>
    </main>
  )
}

export default Products