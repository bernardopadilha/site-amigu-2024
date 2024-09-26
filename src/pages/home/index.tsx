import { SectionBanner } from "./sessions/section-banner";
import { Section2 } from "./sessions/section-cta";
import { Section3 } from "./sessions/Section3";


export function Home() {
  return (
    <section>
      <SectionBanner />
      <Section2 />
      <Section3 />
    </section>
  );
}
