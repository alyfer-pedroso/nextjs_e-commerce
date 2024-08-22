"use client";
import { useCartContext } from "@/data/hooks";
import { Page } from "@/components/template";
import { CartEmptyArea, CartItemArea, CartTotal } from "@/components/cart";

export default function CartPage() {
  const { items, addItem, removeItem } = useCartContext();

  return (
    <Page className="flex flex-col gap-10">
      {items.length === 0 ? (
        <CartEmptyArea />
      ) : (
        <>
          <div className="flex flex-col gap-5">
            {items.map((item) => (
              <CartItemArea key={item.product.id} item={item} addItem={() => addItem(item.product)} removeItem={() => removeItem(item.product)} />
            ))}
          </div>
          <CartTotal items={items} />
        </>
      )}
    </Page>
  );
}
