import Image from "next/image";
import { Product } from "@/data/model";
import { useCartContext } from "@/data/hooks";

export interface ProductCartProps {
  product: Product;
}

export function ProductCart(props: ProductCartProps) {
  const { addItem } = useCartContext();
  const { name, description, price, image } = props.product;

  return (
    <div className="flex flex-col w-72 bg-zinc-900">
      <div className="relative w-76 h-52">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <div className="flex-1 flex flex-col gap-4 p-5">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="flex-1 text-sm text-zinc-400">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">R$ {price.toFixed(2)}</span>
          <button className="border rounded-full px-5 py-1 text-sm" onClick={() => addItem(props.product)}>
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
}
