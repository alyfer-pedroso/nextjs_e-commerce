"use client";
import { ProductCart } from "@/components/product";
import { Page } from "@/components/template";
import { products } from "@/data/constants";

export default function Home() {
  return (
    <Page>
      <div className="flex justify-center gap-5 flex-wrap">
        {products.map((product) => (
          <ProductCart key={product.id} product={product} />
        ))}
      </div>
    </Page>
  );
}
