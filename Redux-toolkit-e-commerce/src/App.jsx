import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './features/products/productSlics';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import CartOverlay from './components/CartOverlay';

function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <Header onCartClick={() => setShowCart(true)} />
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {showCart && <CartOverlay onClose={() => setShowCart(false)} />}
    </div>
  );
}

export default App;