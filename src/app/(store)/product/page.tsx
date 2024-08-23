"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Page } from "@/components/template";

export default function ProductPage() {
  const [id, setId] = useState<string | null>("");
  const searchParams = useSearchParams();

  useEffect(() => {
    const id = searchParams.get("id");
    setId(id);
  }, [searchParams]);

  return <Page>ID do Produto: {id}</Page>;
}
