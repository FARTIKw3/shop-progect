import { fetchProducts } from "@/api/strapi";
import { CatalogTitle } from "@/components/catalogTitle";
import { CategorySlider } from "@/components/categorySlider";
import { LaptopImage } from "@/components/laptopImage";
import { Slider } from "@/components/slider";

export default async function Catalog() {
  const { data } = await fetchProducts("image");
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
