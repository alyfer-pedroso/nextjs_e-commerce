"use client";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Page } from "@/components/template";

function Product() {
  const [id, setId] = useState<string | null>("");
  const searchParams = useSearchParams();

  useEffect(() => {
    const id = searchParams.get("id");
    setId(id);
  }, [searchParams]);

  return <Page>ID do Produto: {id}</Page>;
}

export default function ProductPage() {
  return (
    <Suspense>
      <Product />
    </Suspense>
  );
}
