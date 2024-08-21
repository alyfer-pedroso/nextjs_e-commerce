import { createContext, useState } from "react";

interface ContextProps {
  quantity: number;
  increase?: () => void;
  decrease?: () => void;
}

export const CartContext = createContext<ContextProps>({} as ContextProps);

export function CartProvider(props: any) {
  const [quantity, setQuantity] = useState(0);

  return <CartContext.Provider value={{ quantity }}>{props.children}</CartContext.Provider>;
}
