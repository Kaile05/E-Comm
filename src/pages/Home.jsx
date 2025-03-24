import React from 'react'
import TopRatedProducts from '../components/TopRatedProducts'
import Hero from '../components/Hero'
import ElectronicProducts from '../components/ElectronicProducts'
import About from '../components/About'

function Home({topRatedProducts, electronicProducts}) {
  return (
    <main className='mt-4'>
      <Hero/>
      <About/>
      <TopRatedProducts topRatedProducts={topRatedProducts}/>
      <ElectronicProducts electronicProducts={electronicProducts}/>
    </main>
  )
}

export default Home