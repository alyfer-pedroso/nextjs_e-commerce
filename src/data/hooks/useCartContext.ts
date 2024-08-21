import { useContext } from "react";
import { CartContext } from "@/data/contexts";

export const useCartContext = () => useContext(CartContext);
