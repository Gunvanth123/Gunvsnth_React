
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

function ProductCard({ product }) {
  const dispatch = useDispatch();
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>Rating: ⭐ {product.rating}</p>
      <button
        className="bg-blue-600 text-white px-4 py-1 mt-2 rounded"
        onClick={() => dispatch(addToCart(product))}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;