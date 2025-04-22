import { fetchProducts } from "@/api/strapi";
import { CatalogTitle } from "@/components/catalogTitle";
import { CategorySlider } from "@/components/categorySlider";
import { LaptopImage } from "@/components/laptopImage";
import { Slider } from "@/components/slider";
import { IProduct, StrapiType } from "@/interfaces/strapiData";

export default async function Catalog() {
  const { data } = await fetchProducts<IProduct[]>("image");
  return (
    <div>
      <LaptopImage />
      <Slider dataSlide={data} />
      <CatalogTitle />
      <CategorySlider dataSlide={data} />
      <CategorySlider dataSlide={data} />
    </div>
  );
}
