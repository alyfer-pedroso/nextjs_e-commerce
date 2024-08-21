"use client";
import { CartProvider } from "@/data/contexts";

export default function Layout(props: any) {
  return <CartProvider>{props.children}</CartProvider>;
}
