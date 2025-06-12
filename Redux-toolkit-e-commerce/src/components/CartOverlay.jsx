import React from 'react';
import { useSelector } from 'react-redux';

function CartOverlay({ onClose }) {
  const items = useSelector((state) => state.cart.items);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded w-80 relative">
        <button onClick={onClose} className="absolute top-2 right-2">❌</button>
        <h2 className="text-xl font-bold mb-4">Cart Items</h2>
        <ul className="space-y-2 max-h-60 overflow-y-auto">
          {items.map((item) => (
            <li key={item.id} className="border p-2 rounded">
              {item.name} × {item.quantity}
            </li>
          ))}
        </ul>
        <p className="mt-4 font-bold">Subtotal: ${total.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default CartOverlay;