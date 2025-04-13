import Accordion from "@/components/accordion";
import { FounderSection } from "@/components/founder";
import { HeroSection } from "@/components/heroSection";
import { SubScribeForm } from "@/components/subScribeForm";

export default function About() {
  return (
    <div>
      <HeroSection />
      <Accordion />
      <FounderSection />
      <SubScribeForm />
    </div>
  );
}
