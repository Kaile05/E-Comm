import React from 'react'

function TopRatedProducts({topRatedProducts}) {
  return (
    <section className='min-h-screen flex flex-col items-center justify-center'>
        <h1 className='text-3xl md:text-7xl mt-3'>Top Rated Products</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-3'>
          {topRatedProducts.map((product)=>(
            <div className='bg-white shadow-2xs' key={product.id}>
              <div className='p-6'>
                <img src={product.thumbnail} alt={product.title}/>
                <h1 className='text-lg text-center font-semibold'>{product.title}</h1>
                <p className='text-center'>⭐{product.rating}/5</p>
              </div>
            </div>
          ))}
        </div>
      </section>
  )
}

export default TopRatedProducts