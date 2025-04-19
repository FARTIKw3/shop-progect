import Accordion from "@/components/accordion";
import { HomeBG } from "@/components/homeBG/ihdex";
import ReviewsPreview from "@/components/reviews";
import { Slider } from "@/components/slider";
import { SubScribeForm } from "@/components/subScribeForm";

export default function Home() {
  return (
    <div>
      <HomeBG />
      <Slider />
      <Accordion />
      <ReviewsPreview />
      <SubScribeForm />
    </div>
  );
}
