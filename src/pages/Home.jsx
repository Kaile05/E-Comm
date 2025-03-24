import React from 'react'
import TopRatedProducts from '../components/TopRatedProducts'
import Hero from '../components/Hero'

function Home({topRatedProducts}) {
  return (
    <main className='mt-4'>
      <Hero/>
      <TopRatedProducts topRatedProducts={topRatedProducts}/>
    </main>
  )
}

export default Home