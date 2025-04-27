import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';

export interface CartItem {
  id: string;
  name: string;
  price: string;
  qty: number;
  subdesc?: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string, name: string, qty: number) => void;
  updateQuantity: (id: string, name: string, qty: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: CartItem) => {
    console.log('Attempting to add item to cart.', item);

    setCart((prev) => {
      const isSameItem = (cartItem: CartItem) =>
        cartItem.id === item.id && cartItem.name === item.name;

      const existingItemIndex = prev.findIndex(isSameItem);
      const incomingQty = item.qty ?? 1;

      if (existingItemIndex !== -1) {
        const existingItem = prev[existingItemIndex];
        const currentQty = existingItem.qty ?? 0;
        const proposedQty = currentQty + incomingQty;

        if (proposedQty > 10 || proposedQty < 1) {
          alert(
            `Cannot add item "${item.name}" — exceeds Max Order Size of (10). Current Cart Quantity: ${currentQty}, Attempted Add: ${incomingQty} Unit(s)`
          );
          return prev;
        }

        const updatedItem = {
          ...existingItem,
          qty: proposedQty,
        };

        const updatedCart = [...prev];
        updatedCart[existingItemIndex] = updatedItem;
        return updatedCart;
      }

      if (incomingQty > 10) {
        alert(
          `Cannot add item "${item.name}" — exceeds Max Order Size of (10). Attempted Add: ${incomingQty} Unit(s)`
        );
        return prev;
      }

      return [...prev, { ...item, qty: incomingQty }];
    });
  };

  const updateQuantity = (id: string, name: string, qty: number) => {
    setCart((prev) =>
      prev.map((item) => {
        const itemQty = item.qty ?? 0;
        const moqBottom = 1;
        const moqTop = 10;

        if (itemQty < moqBottom || itemQty > moqTop) {
          return item;
        }

        return item.id === id && item.name === name
          ? { ...item, name, qty }
          : item;
      })
    );
  };

  const removeFromCart = (id: string, name: string) => {
    setCart((prev) =>
      prev.filter((item) => item.name !== name || item.id !== id)
    );
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
