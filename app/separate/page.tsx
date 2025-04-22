import { fetchProducts } from "@/api/strapi";
import { CategoryPage } from "@/components/categoryPage";
import { IProduct } from "@/interfaces/strapiData";
import React from "react";

export default async function Separate() {
  const { data } = await fetchProducts<IProduct[]>("image");

  return (
    <div>
      <CategoryPage allGood={data} />
    </div>
  );
}
