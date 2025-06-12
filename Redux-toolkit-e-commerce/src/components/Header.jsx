
import React from 'react';
import { useSelector } from 'react-redux';

function Header({ onCartClick }) {
  const count = useSelector((state) => state.cart.items.length);

  return (
    <header className="flex justify-between p-4 bg-blue-600 text-white">
      <h1 className="text-xl font-bold">Shop</h1>
      <div onClick={onCartClick} className="relative cursor-pointer">
        🛒
        <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full px-1">
          {count}
        </span>
      </div>
    </header>
  );
}

export default Header;