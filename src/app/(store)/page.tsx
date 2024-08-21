import { ProductCart } from "@/components/product/ProductCart";
import { Page } from "@/components/template";
import { products } from "@/data/constants";

export default function Home() {
  return (
    <Page>
      {products.map((product) => (
        <ProductCart key={product.id} product={product} />
      ))}
    </Page>
  );
}
