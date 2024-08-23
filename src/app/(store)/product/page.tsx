"use client";
import { useParams } from "next/navigation";

export default function ProductPage() {
  const { id } = useParams();

  console.log(id);

  return (
    <div className="text-white">
      ID:
      {id}
    </div>
  );
}
