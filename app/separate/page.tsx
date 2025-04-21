import { fetchProducts } from "@/api/strapi";
import { CategoryPage } from "@/components/categoryPage";
import React from "react";

export default async function Separate() {
  const { data } = await fetchProducts("image");

  return (
    <div>
      <CategoryPage allGood={data} />
    </div>
  );
}
