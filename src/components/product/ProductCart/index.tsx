import Image from "next/image";
import Link from "next/link";

import { Product } from "@/data/model";
import { useCartContext } from "@/data/hooks";

export interface ProductCartProps {
  product: Product;
}

export function ProductCart(props: ProductCartProps) {
  const { addItem } = useCartContext();
  const { id, name, description, price, image } = props.product;

  return (
    <Link
      href={{ pathname: "/product", query: { id } }}
      className="flex flex-col w-72 bg-zinc-900 cursor-pointer transition-all hover:scale-105 hover:bg-zinc-800 rounded-md"
    >
      <div className="relative w-76 h-52">
        <Image src={image} alt={name} fill className="object-cover rounded-t-md" />
      </div>
      <div className="flex-1 flex flex-col gap-4 p-5">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="flex-1 text-sm text-zinc-400">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">R$ {price.toFixed(2)}</span>
          <button className="border rounded-full px-5 py-1 text-sm hover:bg-zinc-600 active:bg-zinc-700" onClick={() => addItem(props.product)}>
            Adicionar
          </button>
        </div>
      </div>
    </Link>
  );
}
