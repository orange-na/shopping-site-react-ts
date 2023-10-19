import { ReactNode, createContext, useState } from "react";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type ShoppingCartContext = {
  openCart: () => void;
  increaseCartItem: (id: number) => void;
  decreaseCartItem: (id: number) => void;
  getItemQuantity: (id: number) => number;
  removeQuantity: (id: number) => void;
  isOpen: boolean;
  cartItems: CartItems[];
};

type CartItems = {
  id: number;
  quantity: number;
};

export const ShoppingCartContext = createContext({} as ShoppingCartContext);

export const ShoppingCartContextProvider = ({
  children,
}: ShoppingCartProviderProps) => {
  const [isOpen, setIsOpen] = useState(false as boolean);
  const [cartItems, setCartItems] = useState<CartItems[]>([]);

  const openCart = () => {
    setIsOpen(!isOpen);
  };

  const getItemQuantity = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const increaseCartItem = (id: number) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === id);

      if (!existingItem) {
        return [...prev, { id, quantity: 1 }];
      } else {
        const updatedItems = prev.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
        return updatedItems;
      }
    });
  };

  const decreaseCartItem = (id: number) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === id);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          const updatedItems = prev.map((item) => {
            if (item.id === id) {
              return { ...item, quantity: item.quantity - 1 };
            }
            return item;
          });
          return updatedItems;
        } else {
          return prev.filter((item) => item.id !== id);
        }
      }

      return prev;
    });
  };

  const removeQuantity = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        openCart,
        getItemQuantity,
        increaseCartItem,
        decreaseCartItem,
        removeQuantity,
        cartItems,
        isOpen,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
