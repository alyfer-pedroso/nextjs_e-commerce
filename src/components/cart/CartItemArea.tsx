import { ItemCart } from "@/data/model";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import Image from "next/image";

export interface CartItemAreaProps {
  item: ItemCart;
}

export function CartItemArea(props: CartItemAreaProps) {
  return (
    <div className="flex items-center gap-5 bg-zinc-900 rounded-md overflow-hidden">
      <div className="relative w-28 h-28">
        <Image src={props.item.product.image} alt={props.item.product.name} fill className="object-cover" />
      </div>
      <div className="flex flex-col justify-center flex-1">
        <div className="flex gap-2 items-center px-5">
          <button>
            <IconMinus />
          </button>
          <span className="flex px-4 py-2 rounded-md bg-black"></span>
          <button>
            <IconPlus />
          </button>
        </div>
      </div>
    </div>
  );
}
