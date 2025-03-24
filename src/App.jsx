import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {

  const [products,setProducts] = useState([])
  const [cart, setCart] = useState([])

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
          rating: product.rating || 0
        }))

        setProducts([...formattedDummyData, ...formattedFakeStoreData])

      } catch (error) {
        console.error('Error fetching products', error)
      }
    }
    fetchProducts()

  },[])

  const addToCart = (product) =>{
    setCart((prevCart)=>{
      const existingItem = prevCart.find((item)=> item.id === product.id)
      if (existingItem){
        return prevCart.map((item)=>
        item.id === product.id ? {...item, quantity: item.quantity + 1} : item)
      } else {
        return [...prevCart, {...product, quantity: 1}]
      }
    })
  }

  const topRatedProducts = products.filter(product => product.rating > 4.8)
  const electronicProducts = products.filter((product) => {
    const category = product.category?.toLowerCase(); 
    return category === 'electronics' || category === 'smartphones' || category === 'laptops';
  });

  return (
    <Router>
      <header>
        <Nav cartItemCount={cart.length}/>
      </header>
        
      <Routes>
        <Route path="/" element={<Home topRatedProducts={topRatedProducts} electronicProducts={electronicProducts}/>} />
        <Route path="/products" element={<Products products={products}  addToCart={addToCart}/>} />
        <Route path="/products/:id" element={<ProductDetails products={products} addToCart={addToCart}/>} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>} />
      </Routes>
      <Footer/>
    </Router>

    
  );
}

export default App;
