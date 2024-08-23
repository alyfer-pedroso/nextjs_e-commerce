import { Cart, Logo } from "..";

export function Header() {
  return (
    <header className="flex justify-between items-center bg-zinc-800 h-20 px-10 text-white">
      <Logo />
      <Cart />
    </header>
  );
}
