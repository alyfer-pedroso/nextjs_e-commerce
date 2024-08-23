import { Header } from "..";

export interface PageProps {
  children: React.ReactNode;
  className?: string;
}

export function Page(props: PageProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className={`w-[90%] lg:w-[80%] flex-1 mx-auto text-white ${props.className ?? ""} py-10`}>{props.children}</main>
    </div>
  );
}
