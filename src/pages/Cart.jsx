import React from 'react';

function Cart({ cart, setCart }) {

  const increaseQuantity = (id) => {
    setCart(cart.map(product =>
      product.id === id ? { ...product, quantity: product.quantity + 1 } : product
    ))
  }

  const decreaseQuantity = (id) => {
    setCart(cart.map(product =>
      product.id === id && product.quantity > 1
        ? { ...product, quantity: product.quantity - 1 }
        : product
    ))
  }

  const removeFromCart = (id) => {
    setCart(cart.filter(product => product.id !== id))
  }

  const totalPrice = cart.reduce((acc, product) => acc + product.price * product.quantity, 0)

  return (
    <main className='p-10 mt-20 min-h-screen'>
      <h1 className='text-5xl font-bold text-center'>Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className='text-center text-gray-500 mt-5'>Your cart is empty.</p>
      ) : (
        <section>
          <div>
            {cart.map((product)=>(
              <div key={product.id}>
                <div className='bg-white p-8 border-b-1 border-slate-300'>
                  <div className='grid md:grid-cols-4 items-center p-8'>
                    <img src={product.thumbnail} alt={product.title} className='h-20 w-20'/>
                    <h2>{product.title}</h2>
                    <p>${product.price}</p>
                    <div className='flex space-x-2'>
                      <button onClick={() => decreaseQuantity(product.id)} className='rounded text-sm py-2 px-4 bg-black text-white hover:ring-1 hover:ring-black hover:bg-white hover:text-black transition cursor-pointer'>-</button>
                      <span className='text-3xl'> {product.quantity}</span>
                      <button onClick={() => increaseQuantity(product.id)} className='rounded text-sm py-2 px-4 bg-black text-white hover:ring-1 hover:ring-black hover:bg-white hover:text-black transition cursor-pointer'>+</button>
                      <button onClick={() => removeFromCart(product.id)} className='rounded text-sm py-2 px-4 bg-black text-white hover:ring-1 hover:ring-black hover:bg-white hover:text-black transition cursor-pointer'>Remove</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="text-right mt-6 text-xl font-bold">
            Total: ${totalPrice.toFixed(2)}
          </div>
          </div>
        </section>
      )}
    </main>
  );
}

export default Cart;
