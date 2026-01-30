import { create } from 'zustand';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  flavor: string;
  quantity: number;
  image: string;
}

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  toggleCart: () => void;
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: () => number;
  totalPrice: () => number;
  // Animation State
  animatingCan: { image: string; x: number; y: number } | null;
  triggerAnimation: (image: string, x: number, y: number) => void;
  clearAnimation: () => void;
}

export const useCart = create<CartStore>((set, get) => ({
  items: [],
  isOpen: false,
  animatingCan: null,
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  triggerAnimation: (image, x, y) => set({ animatingCan: { image, x, y } }),
  clearAnimation: () => set({ animatingCan: null }),
  addItem: (newItem) => {
    const currentItems = get().items;
    const existingItem = currentItems.find((item) => item.id === newItem.id);

    if (existingItem) {
      set({
        items: currentItems.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      });
    } else {
      set({ items: [...currentItems, { ...newItem, quantity: 1 }] });
    }
    // Automatically open cart when item added
    set({ isOpen: true });
  },
  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),
  updateQuantity: (id, quantity) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item
      ).filter(item => item.quantity > 0),
    })),
  clearCart: () => set({ items: [] }),
  totalItems: () => get().items.reduce((acc, item) => acc + item.quantity, 0),
  totalPrice: () =>
    get().items.reduce((acc, item) => acc + item.price * item.quantity, 0),
}));
