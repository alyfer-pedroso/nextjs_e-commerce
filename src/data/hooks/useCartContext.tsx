import { useContext } from "react";
import { CartContext } from "@/data/contexts";

export function useCartContext() {
  const cart_context = useContext(CartContext);
  return cart_context;
}
