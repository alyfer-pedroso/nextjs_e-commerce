import { createContext, useState } from "react";
import { ItemCart, Product } from "../model";

interface ContextProps {
  items: ItemCart[];
  itemsQuantity: number;
  addItem: (item: Product) => void;
}

export const CartContext = createContext<ContextProps>({} as ContextProps);

export function CartProvider(props: any) {
  const [items, setItems] = useState<ItemCart[]>([]);

  function addItem(product: Product) {
    const index = items.findIndex((i) => i.product.id === product.id);

    if (index === -1) {
      setItems([...items, { product, quantity: 1 }]);
      return;
    }
    const newItems = [...items];
    newItems[index].quantity++;
    setItems(newItems);
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        get itemsQuantity() {
          return items.reduce((total, item) => total + item.quantity, 0);
        },
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
