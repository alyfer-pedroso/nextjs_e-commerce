"use client";
import { useCartContext } from "@/data/hooks";
import { Page } from "@/components/template";

export default function CartPage() {
  const {} = useCartContext();

  return <Page>Carrinho:</Page>;
}
