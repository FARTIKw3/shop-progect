import { fetchProducts } from "@/api/strapi";
import { LaptopImage } from "@/components/laptopImage";
import { Slider } from "@/components/slider";
import { IProduct } from "@/interfaces/strapiData";

export default async function Catalog() {
  const { data } = await fetchProducts<IProduct>("image");
  return (
    <div>
      <LaptopImage />
      <Slider dataSlide={data} />
    </div>
  );
}
