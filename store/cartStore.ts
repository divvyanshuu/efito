// ============================================
// EFITO — Cart Store
// ============================================
// Zustand is our global state manager.
// This store holds the cart state and actions
// accessible from ANY component in the app
// without passing props through every level.
//
// CONCEPT: State Management
// Problem: Component A (Navbar) needs to show
// cart count. Component B (ProductPage) adds
// to cart. They're not parent/child so we can't
// pass props between them. Solution: global store
// both components read from and write to.
// ============================================

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CartItem, Product, Size, Color } from "@/types";

// --- STORE INTERFACE ---
// Defines what data and actions the store has

interface CartStore {
  items: CartItem[];

  // Actions — functions that modify state
  addItem: (product: Product, size: Size, color: Color) => void;
  removeItem: (productId: string, size: Size, color: Color) => void;
  updateQuantity: (productId: string, size: Size, color: Color, quantity: number) => void;
  clearCart: () => void;

  // Computed values — derived from state
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

// --- STORE CREATION ---
// create() from Zustand creates the global store
// persist() middleware saves cart to localStorage
// so cart survives page refreshes

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      // ADD ITEM
      // If same product+size+color exists, increment quantity
      // Otherwise add as new item
      addItem: (product, size, color) => {
        const items = get().items;
        const existingIndex = items.findIndex(
          (item) =>
            item.product.id === product.id &&
            item.size === size &&
            item.color.name === color.name
        );

        if (existingIndex > -1) {
          // Item exists — just increase quantity
          const updated = [...items];
          updated[existingIndex].quantity += 1;
          set({ items: updated });
        } else {
          // New item — add to cart
          set({ items: [...items, { product, size, color, quantity: 1 }] });
        }
      },

      // REMOVE ITEM
      // Filter out the item matching product+size+color
      removeItem: (productId, size, color) => {
        set({
          items: get().items.filter(
            (item) =>
              !(
                item.product.id === productId &&
                item.size === size &&
                item.color.name === color.name
              )
          ),
        });
      },

      // UPDATE QUANTITY
      // Find item and set its quantity directly
      // If quantity is 0 or less, remove the item
      updateQuantity: (productId, size, color, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId, size, color);
          return;
        }
        const updated = get().items.map((item) =>
          item.product.id === productId &&
          item.size === size &&
          item.color.name === color.name
            ? { ...item, quantity }
            : item
        );
        set({ items: updated });
      },

      // CLEAR CART
      // Empty the cart completely — called after order placed
      clearCart: () => set({ items: [] }),

      // GET TOTAL ITEMS
      // Reduce array to sum of all quantities
      // DSA CONCEPT: Array.reduce() — classic accumulator pattern
      getTotalItems: () =>
        get().items.reduce((total, item) => total + item.quantity, 0),

      // GET TOTAL PRICE
      // Sum of (price × quantity) for all items
      // Remember: price is in paise, divide by 100 for display
      getTotalPrice: () =>
        get().items.reduce(
          (total, item) => total + item.product.price * item.quantity,
          0
        ),
    }),
    {
      name: "efito-cart", // localStorage key
    }
  )
);