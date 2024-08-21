import { createContext } from "react";

export const CartContext = createContext<any>(null);

export function CartProvider(props: any) {
  return <CartContext.Provider value={{}}>{props.children}</CartContext.Provider>;
}
