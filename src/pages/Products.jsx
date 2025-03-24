import { useState } from 'react'
import Card from '../components/Card'

function Products({products, addToCart}) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = ['all', ...new Set(products.map((product) => product.category))]

  const searchProduct = products.filter((product)=>{
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <main className='p-10 flex flex-col justify-center items-center mt-4'>
      <h1 className='text-5xl font-bold mt-4'>Products</h1>
      <input
        type='text'
        placeholder='Search products...'
        value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)}
        className='w-full max-w-md px-4 py-2 rounded-md bg-white border border-gray-300 focus:ring-1 focus:ring-gray-600 outline-none'
      />
      <select
        value={selectedCategory}
        onChange={(e)=> setSelectedCategory(e.target.value)}
        className='w-full max-w-md mt-4 px-4 py-2 rounded-md bg-white border border-gray-300 focus:ring-1 focus:ring-gray-600 outline-none'
      >
        {categories.map((category)=>(
          <option key={category} value={category}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </option>
        ))}
      </select>
      <div>
        <ul>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5'>
            {searchProduct.length > 0 ? (
              searchProduct.map((product)=>(
                <Card product={product} key={product.id} addToCart={addToCart}/>
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">No products found.</p>
            )}
          </div>
        </ul>
      </div>
    </main>
  )
}

export default Products