import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import { useEffect, useState } from "react";

function App() {

  const [products,setProducts] = useState([])

  useEffect(()=>{
    const fetchProducts = async () => {
      try {
        const [dummyResponse, fakeStoreResponse] = await Promise.all([
          fetch('https://dummyjson.com/products'),
          fetch('https://fakestoreapi.com/products')
        ])

        const dummyData = await dummyResponse.json()
        const fakeStoreData = await fakeStoreResponse.json()
        
        const formattedFakeStoreData = fakeStoreData.map((product)=>({
          id: `fake-${product.id}`,
          title: product.title,
          price: product.price,
          category: product.category,
          thumbnail: product.image,
          description: product.description,
          rating: product.rating.rate,
        }))

        const formattedDummyData = dummyData.products.map((product)=>({
          id:`dummy-${product.id}`,
          ...product,
          rating: product.rating
        }))

        setProducts([...formattedDummyData, ...formattedFakeStoreData])

      } catch (error) {
        console.error('Error fetching products', error)
      }
    }
    console.log(products)
    fetchProducts()

  },[])

  const topRatedProducts = products.filter(product => product.rating > 4.8)

  return (
    <Router>
      <header>
        <Nav />
      </header>
        
      <Routes>
        <Route path="/" element={<Home topRatedProducts={topRatedProducts}/>} />
        <Route path="/products" element={<Products products={products} />} />
        <Route path="/products/:id" element={<ProductDetails products={products}/>} />
      </Routes>
    </Router>
  );
}

export default App;
