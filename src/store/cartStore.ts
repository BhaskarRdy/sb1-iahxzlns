import { create } from 'zustand';
import { CartItem, Product } from '../types';

interface CartState {
  items: CartItem[];
  addItem: (product: Product, size: string) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  total: 0,
  addItem: (product, size) => {
    set((state) => {
      const existingItem = state.items.find(
        (item) => item.id === product.id && item.selectedSize === size
      );

      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.id === product.id && item.selectedSize === size
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          total: state.total + product.price,
        };
      }

      return {
        items: [...state.items, { ...product, quantity: 1, selectedSize: size }],
        total: state.total + product.price,
      };
    });
  },
  removeItem: (productId) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== productId),
      total: state.items.reduce((acc, item) => {
        if (item.id === productId) {
          return acc;
        }
        return acc + item.price * item.quantity;
      }, 0),
    }));
  },
  updateQuantity: (productId, quantity) => {
    set((state) => ({
      items: state.items.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      ),
      total: state.items.reduce((acc, item) => {
        const itemTotal = item.id === productId
          ? item.price * quantity
          : item.price * item.quantity;
        return acc + itemTotal;
      }, 0),
    }));
  },
  clearCart: () => set({ items: [], total: 0 }),
}));