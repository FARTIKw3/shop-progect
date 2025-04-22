import { fetchProducts } from "@/api/strapi";
import Accordion from "@/components/accordion";
import { HomeBG } from "@/components/homeBG/ihdex";
import { HomeReviews } from "@/components/reviewsHomePage";
import { Slider } from "@/components/slider";
import { SubScribeForm } from "@/components/subScribeForm";
import { IProduct } from "@/interfaces/strapiData";

export default async function Home() {
  const { data } = await fetchProducts<IProduct[]>("image");
  return (
    <div>
      <HomeBG />
      <Slider dataSlide={data} />
      <Accordion />
      <HomeReviews />
      <SubScribeForm />
    </div>
  );
}
