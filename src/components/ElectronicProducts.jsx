import React from 'react'

function ElectronicProducts({electronicProducts}) {
  return (
    <section className='min-h-screen flex flex-col items-center justify-center'>
        <h1 className='text-3xl md:text-7xl mt-3'>Electronic Products</h1>
        <div className='grid grid-cols-1 md:grid-2 lg:grid-cols-3 gap-6 mt-3'>
          {electronicProducts.map((product)=>(
            <div key={product.id}>
              <div className='bg-white rounded shadow-2xs p-6'>
                <img src={product.thumbnail} alt={product.title} className='w-full mx-auto h-50 rounded'/>
                <h1 className='text-sm text-center font-semibold'>{product.title}</h1>
              </div>
            </div>
          ))}
        </div>
      </section>
  )
}

export default ElectronicProducts