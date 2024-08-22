"use client";
import { useCartContext } from "@/data/hooks";
import { Page } from "@/components/template";
import { CartItemArea } from "@/components/cart/CartItemArea";

export default function CartPage() {
  const { items } = useCartContext();

  return (
    <Page>
      <div className="flex flex-col gap-5">
        {items.map((item) => (
          <CartItemArea key={item.product.id} item={item} />
        ))}
      </div>
    </Page>
  );
}
