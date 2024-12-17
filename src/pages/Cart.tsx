import React from 'react';
import { useCartStore } from '../store/cartStore';
import { CartItem } from '../components/cart/CartItem';
import { Price } from '../components/ui/Price';

export const Cart = () => {
  const { items, total, removeItem, updateQuantity } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-semibold text-gray-900">Your cart is empty</h2>
        <p className="mt-2 text-gray-500">Add some items to get started!</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        {items.map((item) => (
          <CartItem
            key={`${item.id}-${item.selectedSize}`}
            item={item}
            onUpdateQuantity={updateQuantity}
            onRemove={removeItem}
          />
        ))}
        <div className="mt-8 flex justify-between items-center">
          <div>
            <p className="text-lg text-gray-900">Total:</p>
            <Price amount={total} className="text-2xl font-bold text-gray-900" />
          </div>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};