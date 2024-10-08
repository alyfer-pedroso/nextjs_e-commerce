import { ItemCart } from "@/data/model";

export interface CartTotalProps {
  items: ItemCart[];
}

export function CartTotal(props: CartTotalProps) {
  const total = props.items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <div className="flex items-center justify-between bg-zinc-900 rounded-md p-7  transition-transform hover:scale-105">
      <div className="flex flex-col justify-between">
        <span className="text-zinc-500">Total</span>
        <span className="text-3xl font-bold text-yellow-500">R$ {total.toFixed(2)}</span>
      </div>
      <button className="bg-green-600 hover:bg-green-800 px-4 py-2 rounded-md text-xl">Finalizar</button>
    </div>
  );
}
