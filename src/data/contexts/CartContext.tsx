import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks";
import { ItemCart, Product } from "../model";

interface ContextProps {
  items: ItemCart[];
  itemsQuantity: number;
  addItem: (item: Product) => void;
  removeItem: (item: Product) => void;
}

export const CartContext = createContext<ContextProps>({} as ContextProps);

export function CartProvider(props: any) {
  const [items, setItems] = useState<ItemCart[]>([]);
  const { getStorage, setStorage } = useLocalStorage();

  useEffect(() => {
    const cart = getStorage("cart");
    if (cart) {
      setItems(cart);
    }
  }, [getStorage]);

  function addItem(product: Product) {
    const index = items.findIndex((i) => i.product.id === product.id);

    if (index === -1) {
      changeItems([...items, { product, quantity: 1 }]);
      return;
    }
    const newItems = [...items];
    newItems[index].quantity++;
    changeItems(newItems);
  }

  function removeItem(product: Product) {
    const newItems = items
      .map((i) => {
        if (i.product.id === product.id) {
          i.quantity--;
        }
        return i;
      })
      .filter((i) => i.quantity > 0);
    changeItems(newItems);
  }

  function changeItems(newItems: ItemCart[]) {
    setItems(newItems);
    setStorage("cart", newItems);
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        get itemsQuantity() {
          return items.reduce((total, item) => total + item.quantity, 0);
        },
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
