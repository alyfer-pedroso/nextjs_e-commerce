import Image from "next/image";
import { Product } from "@/data/model";

export interface ProductCartProps {
  product: Product;
}

export function ProductCart(props: ProductCartProps) {
  const { name, description, price, image } = props.product;

  return (
    <div className="flex flex-col w-72">
      <div className="relative w-76 h-52">
        <Image src={image} alt={name} fill />
      </div>
    </div>
  );
}
