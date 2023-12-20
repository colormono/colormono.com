import SectionBrand from "./section-brand";
import SectionColors from "./section-colors";
import SectionComponents from "./section-components";
import SectionGrid from "./section-grid";
import SectionHero from "./section-hero";
import SectionIcons from "./section-icons";
import SectionIntro from "./section-intro";
import SectionMocks from "./section-mocks";
import SectionPrinciples from "./section-principles";
import SectionTypography from "./section-typography";

export default function Page() {
  return (
    <section className="container mx-auto grid gap-16">
      <SectionHero />
      <SectionIntro />
      <SectionMocks />
      {/* <SectionPrinciples /> */}
      <SectionTypography />
      <SectionIcons />
      <SectionBrand />
      <SectionColors />
      <SectionGrid />
      <SectionComponents />
    </section>
  );
}
