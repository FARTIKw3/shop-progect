import Accordion from "@/components/accordion";
import { HomeBG } from "@/components/homeBG/ihdex";
import { Slider } from "@/components/slider";
import { SubScribeForm } from "@/components/subScribeForm";

export default function Home() {
  return (
    <div>
      <HomeBG />
      <Slider />
      <Accordion />
      <SubScribeForm />
    </div>
  );
}
